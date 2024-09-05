import { Ionicons } from "@expo/vector-icons";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useStopwatch } from "react-timer-hook";

const SleepPage = () => {
  const { totalSeconds, seconds, minutes, isRunning, start, pause, reset } =
    useStopwatch();

  const formatToString = (seconds: number, minutes: number) => {
    let str = " sec";
    if (seconds) {
      str = seconds + str;
    }

    if (minutes) {
      str = `${minutes} min ` + str;
    }

    return isRunning ? str : "";
  };

  return (
    <ScrollView className="flex h-screen p-6 space-y-6">
      <View>
        <View className="py-16 border-[0.5px] border-gray-300 space-y-6 rounded-t-lg px-14 bg-secondary">
          <Text className="font-medium text-center text-primary">
            Tap to {isRunning ? "stop" : "start"} the timer{" "}
            {formatToString(seconds, minutes)}
          </Text>
          <View className="items-center space-y-2">
            {isRunning ? (
              <TouchableOpacity
                onPress={() => {
                  reset();
                  pause();
                }}
                className="w-28 h-28 shadow-md border-8 border-dark/60 rounded-full bg-[#4F8DD1]/10 items-center justify-center"
              >
                <Text className="text-lg font-medium text-primary">Stop</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => start()}
                className="w-28 h-28 shadow-md border-2 border-dark/60 rounded-full bg-[#4F8DD1]/10 items-center justify-center"
              >
                <Text className="text-lg font-medium text-primary">Start</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View className="pb-4 border-[0.5px] border-gray-300 space-y-6 rounded-b-lg px-14 bg-secondary">
          <TouchableOpacity className="p-1 bg-white rounded-md shadow-sm">
            <Text className="text-xs font-bold text-center text-primary">
              Add Manual Entry
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-row items-center">
        <Text className="text-lg font-medium text-primary">Sleep Sounds</Text>
        <Ionicons name="chevron-forward" color={"#0078A4"} size={24} />
      </View>

      <ScrollView horizontal className="flex gap-4">
        <Image
          source={require("@/assets/images/sleep/sleep-1.png")}
          className="w-32 h-32 aspect-square"
        />
        <Image
          source={require("@/assets/images/sleep/sleep-2.png")}
          className="w-32 h-32 aspect-square"
        />
        <Image
          source={require("@/assets/images/sleep/sleep-3.png")}
          className="w-32 h-32 aspect-square"
        />
        <Image
          source={require("@/assets/images/sleep/sleep-1.png")}
          className="w-32 h-32 aspect-square"
        />
      </ScrollView>

      <TouchableOpacity className="w-full p-2 rounded-lg bg-secondary">
        <Text className="font-medium text-center text-md text-primary">
          Summary
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SleepPage;
