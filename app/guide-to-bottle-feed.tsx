import { Text, View } from "react-native";
import React from "react";
import Markdown from "react-native-markdown-display";
import { guideToBottleFeed } from "@/constants/contants";

const GuideToBottleFeed = () => {
  return (
    <View className="h-screen p-4 m-4 rounded-md bg-highlight/20">
      <Markdown>{guideToBottleFeed}</Markdown>
    </View>
  );
};

export default GuideToBottleFeed;
