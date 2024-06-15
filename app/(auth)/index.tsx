import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter, useSegments } from "expo-router";

const IndexPae = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-medium text-center">Main Page</Text>
    </SafeAreaView>
  );
};

export default IndexPae;

const styles = StyleSheet.create({});
