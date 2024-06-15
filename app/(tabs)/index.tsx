import { Text, View } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";

const TabOne = () => {
  return (
    <View>
      <Text className="text-2xl font-bold text-center text-blue-600">
        Index Page
      </Text>
    </View>
  );
};

export default TabOne;
