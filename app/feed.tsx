import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

type tabType = "breast" | "bottle";

const FeedingPage = () => {
  const [tab, setTab] = useState<tabType>("breast");

  return (
    <View className="p-4">
      <View className="flex-row bg-white space-x-4 py-2 rounded-md shadow-sm justify-between px-4">
        <TouchableOpacity
          onPress={() => setTab("breast")}
          className={`p-2  rounded-md flex-1 ${
            tab == "breast" ? "bg-dark" : ""
          }`}
        >
          <Text
            className={`text-white text-center font-medium ${
              tab == "breast" ? "text-white" : "text-dark"
            }`}
          >
            BreastFeeding
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTab("bottle")}
          className={`p-2  rounded-md flex-1 ${
            tab == "bottle" ? "bg-dark" : ""
          }`}
        >
          <Text
            className={`text-white text-center font-medium ${
              tab == "bottle" ? "text-white" : "text-dark"
            }`}
          >
            BottleFeeding
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
    </View>
  );
};

export default FeedingPage;
