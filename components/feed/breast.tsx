import { Link } from "expo-router";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import { useStopwatch } from "react-timer-hook";

const BreastFeeding = () => {
  const {
    totalSeconds: leftTotalSeconds,
    seconds: leftSeconds,
    minutes: leftMinutes,
    isRunning: leftIsRunning,
    start: leftStart,
    pause: leftPause,
    reset: leftReset,
  } = useStopwatch();

  const {
    totalSeconds: rightTotalSeconds,
    seconds: rightSeconds,
    minutes: rightMinutes,
    isRunning: rightIsRunning,
    start: rightStart,
    pause: rightPause,
    reset: rightReset,
  } = useStopwatch();

  const resetAll = () => {
    leftReset();
    rightReset();
  };

  const stop = () => {
    resetAll();
    leftPause();
    rightPause();
  };

  return (
    <ScrollView className="flex h-screen space-y-6">
      <View className="py-20 border-[0.5px] border-gray-300 space-y-6 rounded-lg shadow-sm px-14 bg-secondary">
        {leftMinutes == 0 &&
        rightMinutes == 0 &&
        leftSeconds == 0 &&
        rightSeconds == 0 ? (
          <Text className="text-xl font-bold text-center text-medium text-dark">
            Tap the L or R button to start the timer
          </Text>
        ) : (
          <View>
            <Text className="text-xl font-bold text-center text-medium text-dark">
              {String(
                Math.floor((leftTotalSeconds + rightTotalSeconds) / 60)
              ).padStart(2, "0")}
              :{" "}
              {String((leftTotalSeconds + rightTotalSeconds) % 60).padStart(
                2,
                "0"
              )}
            </Text>
            <Text className="text-xl font-bold text-center text-medium text-dark">
              Feed Duration
            </Text>
          </View>
        )}

        <View className="flex-row justify-between">
          <View className="items-center space-y-2">
            <TouchableOpacity
              onPress={() => {
                leftIsRunning ? leftPause() : leftStart();
                if (rightIsRunning) rightPause();
              }}
              className="w-20 h-20 shadow-md border-2 border-dark/60 rounded-full bg-[#4F8DD1]/10 items-center justify-center"
            >
              <Text className="text-lg font-medium">L</Text>
            </TouchableOpacity>
            <Text className="font-medium text-dark text-md">
              {String(leftMinutes).padStart(2, "0")} :{" "}
              {String(leftSeconds).padStart(2, "0")}
            </Text>
          </View>
          <View className="items-center space-y-2">
            <TouchableOpacity
              onPress={() => {
                rightIsRunning ? rightPause() : rightStart();
                if (leftIsRunning) leftPause();
              }}
              className="w-20 h-20 shadow-md border-2 border-dark/60 rounded-full bg-[#4F8DD1]/10 items-center justify-center"
            >
              <Text className="text-lg font-medium">R</Text>
            </TouchableOpacity>
            <Text className="font-medium text-dark text-md">
              {String(rightMinutes).padStart(2, "0")} :{" "}
              {String(rightSeconds).padStart(2, "0")}
            </Text>
          </View>
        </View>
      </View>
      {!(
        leftMinutes == 0 &&
        rightMinutes == 0 &&
        leftSeconds == 0 &&
        rightSeconds == 0
      ) && (
        <View className="flex-row space-x-4">
          <TouchableOpacity
            onPress={resetAll}
            className="flex-1 p-2 rounded-md shadow-sm bg-red-500/40"
          >
            <Text className="font-medium text-center text-red-600">Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={stop}
            className="flex-1 p-2 rounded-md shadow-sm bg-red-500/40"
          >
            <Text className="font-medium text-center text-red-600">Stop</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text className="text-lg font-medium text-primary">
        Benefits of Breastfeeding
      </Text>

      <View className="flex-row items-center justify-between space-x-4 w-fit">
        <Image
          source={require("@/assets/images/feed/breast-feed.png")}
          className="w-[35%] h-fit "
        />
        <View className="w-[60%]">
          <Text className="">
            While we talk a lot about your baby's benefits of breastfeeding,
            there are a lot of benefits for you too!
          </Text>
          <TouchableOpacity>
            <Link href={"/benefits-breast-feeding"}>
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

export default BreastFeeding;
