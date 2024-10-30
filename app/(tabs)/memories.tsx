// Memories.tsx
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { Camera } from "expo-camera/legacy";
import * as ImagePicker from "expo-image-picker";
import { useUser } from "@clerk/clerk-expo";
import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const memoryCategories = [
  { id: "1", title: "I'm home!" },
  { id: "2", title: "First smile" },
  { id: "3", title: "First feed" },
  { id: "4", title: "Sleeping" },
  { id: "5", title: "Bath time" },
  { id: "6", title: "First outing" },
  { id: "7", title: "First laugh" },
  { id: "8", title: "First hug" },
  { id: "9", title: "In the park" },
  { id: "10", title: "Rolling over" },
  { id: "11", title: "Favorite toy" },
  { id: "12", title: "Clapping" },
  { id: "13", title: "Sitting up" },
  { id: "14", title: "First vacation" },
  { id: "15", title: "My room" },
];

const Memories: React.FC = () => {
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { user } = useUser();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleOpenCamera = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCameraVisible(true);
  };

  const handleTakePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setImagePreview(photo.uri);
      setCameraVisible(false);
    }
  };

  const handlePickImage = async (categoryId: string) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets?.length) {
      setImagePreview(result.assets[0].uri);
      setSelectedCategory(categoryId);
    }
  };

  const handleSaveImage = () => {
    if (selectedCategory && imagePreview) {
      setImages((prev) => ({ ...prev, [selectedCategory]: imagePreview }));
      setImagePreview(null);
      setSelectedCategory(null);

      uploadToBucket(imagePreview);
    }
  };

  const handleRetakePhoto = () => {
    setImagePreview(null);
    setCameraVisible(true);
  };
  const uploadToBucket = async (
    uri: string,
    fileType?: "video" | "image" | undefined
  ) => {
    if (!user) return;

    const filename = uri.split("/").slice(-1)[0];
    const storageRef = ref(storage, `media/${user.id}/${filename}`);

    try {
      const response = await fetch(uri);

      if (!response.ok) {
        throw new Error(`Failed to fetch file ${response.statusText}`);
      }

      const mediaBlob = await response.blob();
      const upload = uploadBytesResumable(storageRef, mediaBlob);

      return new Promise((resolve, reject) => {
        upload.on(
          "state_changed",
          (snapshot) => {
            console.log(snapshot.bytesTransferred, "/", snapshot.totalBytes);
          },
          (error) => reject(error),
          () => {
            getDownloadURL(upload.snapshot.ref)
              .then((url) =>
                resolve({ filename, fileUrl: url, ownerId: user.id, fileType })
              )
              .catch((e) => console.log(e));
          }
        );
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (hasPermission === null) {
    return (
      <View className="items-center justify-center flex-1">
        <Text>Requesting camera permissions...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View className="items-center justify-center flex-1">
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-4 bg-white">
      {/* Header */}
      <Text className="mb-4 text-xl font-semibold text-gray-800">Memories</Text>

      {/* Memory Categories Grid */}
      <View className="flex flex-row flex-wrap justify-between">
        {memoryCategories.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="items-center justify-center w-1/3 h-32 m-1 bg-gray-200 border border-gray-300 rounded-lg"
            onPress={() => handlePickImage(item.id)}
            onLongPress={() => handleOpenCamera(item.id)}
          >
            {images[item.id] ? (
              <Image
                source={{ uri: images[item.id] }}
                className="w-full h-full rounded-lg"
              />
            ) : (
              <>
                <Text className="text-2xl text-blue-400">+</Text>
                <Text className="mt-2 text-center">{item.title}</Text>
              </>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Camera Modal */}
      {cameraVisible && (
        <Modal animationType="slide" transparent={true} visible={cameraVisible}>
          <View className="items-center justify-center flex-1 bg-black">
            <Camera className="w-full h-full" ref={(ref) => setCameraRef(ref)}>
              <View className="absolute flex-row w-full px-6 bottom-10 justify-evenly">
                <TouchableOpacity
                  className="p-4 bg-white rounded-lg"
                  onPress={handleTakePhoto}
                >
                  <Text className="text-black">Capture</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="p-4 bg-white rounded-lg"
                  onPress={() => setCameraVisible(false)}
                >
                  <Text className="text-black">Cancel</Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        </Modal>
      )}

      {/* Preview Modal */}
      {imagePreview && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!imagePreview}
        >
          <View className="items-center justify-center flex-1 bg-black">
            <Image
              source={{ uri: imagePreview }}
              className="w-3/4 mb-4 rounded-lg h-3/4"
            />
            <View className="flex-row w-full px-4 py-12 justify-evenly">
              <TouchableOpacity
                className="p-4 m-2 bg-white rounded-lg"
                onPress={handleSaveImage}
              >
                <Text className="text-black">Use Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-4 m-2 bg-white rounded-lg"
                onPress={handleRetakePhoto}
              >
                <Text className="text-black">Retake</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-4 m-2 bg-white rounded-lg"
                onPress={() => setImagePreview(null)}
              >
                <Text className="text-black">Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Memories;
