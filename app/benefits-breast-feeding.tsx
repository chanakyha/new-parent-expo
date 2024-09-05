import { Text, View } from "react-native";
import React from "react";
import Markdown from "react-native-markdown-display";
import { benefitsBreasts } from "@/constants/contants";
import { ScrollView } from "react-native-gesture-handler";

const BenefitsBreastFeeding = () => {
  return (
    <View className="h-screen p-4 m-4 rounded-md bg-highlight/20">
      <Markdown>{benefitsBreasts}</Markdown>
    </View>
  );
};

export default BenefitsBreastFeeding;
