import TopBar from "@/components/home/TopBar";
import { babycareBlogs } from "@/constants/contants";
import { Ionicons } from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";
import { ScrollView, Text, View } from "react-native";

const TabOne = () => {
  return (
    <View>
      <TopBar />
      <ScrollView
        contentInset={{ bottom: 140, top: -10 }}
        className="p-5 space-y-4"
      >
        <TouchableOpacity className="mx-auto relative">
          <Image
            source={require("@/assets/images/home-baby.png")}
            className="w-auto h-96 rounded-lg"
          />
          <View className="flex-row items-end absolute bottom-2 left-2">
            <Text className="font-medium text-sm text-white">Birthday: </Text>
            <Text className="text-3xl text-white font-bold">21 </Text>
            <Text className="font-medium text-sm text-white">Sept 2003</Text>
          </View>
        </TouchableOpacity>

        <View className="p-4 bg-dark rounded-lg shadow-2xl">
          <Text className="text-xs text-white">
            "Raising a child is like planting a seed and watching it grow into a
            beautiful flower." — Lisa Wingate
          </Text>
        </View>

        <View>
          <View className="flex-row items-center gap-1">
            <Text className="items-center text-lg font-medium text-dark">
              Baby Care
            </Text>
            <Ionicons name="chevron-forward" color={"#8D8C92"} size={24} />
          </View>
        </View>

        {babycareBlogs.map((blog, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex-1 bg-white p-4 rounded-md shadow-x space-y-1"
            >
              <Image source={blog.image} className="w-full" />
              <Text className="text-lg font-medium" numberOfLines={1}>
                {blog.title}
              </Text>
              <Text numberOfLines={2} className="text-xs">
                {blog.description}
              </Text>
              <View className="flex-row space-x-2 items-center pt-2">
                <View className="bg-dark px-2 py-1 rounded-full">
                  <Text className="text-sm text-white">Read More</Text>
                </View>
                <View className="bg-dark px-2 py-1 rounded-full">
                  <Text className="text-sm text-white capitalize">
                    {blog.type}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TabOne;
