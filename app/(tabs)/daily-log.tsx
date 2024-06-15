import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { logs } from "@/constants/contants";
import { useNavigation } from "expo-router";

const Dailylog = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text className="font-medium text-xl">Daily Log</Text>,
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
            <TouchableOpacity className="relative shadow-md">
              <Image source={log.item.image} />
              <Text className="text-sm font-medium absolute top-1 left-3">
                {log.item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Dailylog;
