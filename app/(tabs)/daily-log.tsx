import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useLayoutEffect } from "react";
import { logs } from "@/constants/contants";
import { Link, useNavigation } from "expo-router";

const Dailylog = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text className="text-xl font-medium">Daily Log</Text>,
    });
  }, [navigation]);
  return (
    <View className="p-4">
      <FlatList
        data={logs}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          gap: 20,
        }}
        key={"#"}
        numColumns={2}
        renderItem={(log) => {
          return (
            <Link href={log.item.href} asChild>
              <TouchableOpacity className="relative shadow-md">
                <Image source={log.item.image} />
                <Text className="absolute text-sm font-medium top-1 left-3">
                  {log.item.name}
                </Text>
              </TouchableOpacity>
            </Link>
          );
        }}
      />
    </View>
  );
};

export default Dailylog;
