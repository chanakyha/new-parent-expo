import { Text, View } from "react-native";
import React from "react";
import Markdown from "react-native-markdown-display";
import { benefitsBreasts } from "@/constants/contants";

const BenefitsBreastFeeding = () => {
  return (
    <View className="h-screen p-4 bg-highlight/20">
      <Markdown>{benefitsBreasts}</Markdown>
    </View>
  );
};

export default BenefitsBreastFeeding;
