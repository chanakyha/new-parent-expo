import { Link } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

import { useStopwatch } from "react-timer-hook";

const BottleFeeding = () => {
  return (
    <ScrollView className="flex h-screen space-y-6">
      <View>
        <View className="py-16 border-[0.5px] border-gray-300 space-y-6 rounded-t-lg px-14 bg-secondary">
          <View className="flex-row justify-between">
            <View className="items-center space-y-2">
              <TouchableOpacity className="w-20 h-20 shadow-md border-2 border-dark/60 rounded-full bg-[#4F8DD1]/10 items-center justify-center">
                <Text className="text-xs font-medium text-primary">
                  Breast Milk
                </Text>
              </TouchableOpacity>
            </View>
            <View className="items-center space-y-2">
              <TouchableOpacity className="w-20 h-20 shadow-md border-2 border-dark/60 rounded-full bg-[#4F8DD1]/10 items-center justify-center">
                <Text className="text-xs font-medium text-primary">
                  Formula
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="py-2 border-[0.5px] flex flex-row justify-between border-gray-300 space-y-6 px-14 bg-secondary">
          <Text className="font-medium text-primary">Feed Time</Text>
        </View>
        <View className="py-2 border-[0.5px] border-gray-300 space-y-6 px-14 bg-secondary">
          <Text className="font-medium text-primary">Amount</Text>
        </View>
        <View className="pt-10 pb-4 border-[0.5px] border-gray-300 space-y-6 rounded-b-lg px-14 bg-secondary">
          <TouchableOpacity className="p-1 bg-white rounded-md shadow-sm">
            <Text className="text-xs font-bold text-center text-primary">
              Save Feed
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text className="text-lg font-medium text-primary">
        Guide to Bottle Feeding
      </Text>

      <View className="flex-row items-center justify-between space-x-4 w-fit">
        <Image
          source={require("@/assets/images/feed/bottle-feed.png")}
          className="w-[35%] h-fit "
        />
        <View className="w-[60%]">
          <Text className="">
            Feeding a baby is a whole new skill to learn, regardless of whether
            they bottle feed or breastfeed.
          </Text>
          <TouchableOpacity>
            <Link href={"/guide-to-bottle-feed"}>
              <Text className="text-right text-blue-600">Read more...</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity className="w-full p-2 rounded-lg bg-secondary">
        <Text className="font-medium text-center text-md text-primary">
          Summary
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BottleFeeding;
