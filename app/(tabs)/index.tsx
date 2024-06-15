import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";

const TabOne = () => {
  const { signOut } = useAuth();
  return (
    <Pressable onPress={() => signOut()}>
      <Text className="text-2xl font-bold text-center text-blue-600">
        Signout
      </Text>
    </Pressable>
  );
};

export default TabOne;
