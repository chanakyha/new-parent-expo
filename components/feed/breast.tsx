import { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const BreastFeeding = () => {
  const [leftTimer, setLeftTimer] = useState({
    seconds: 0,
    minutes: 0,
  });
  const [rightTimer, setRightTimer] = useState({
    seconds: 0,
    minutes: 0,
  });

  const [isLeftActive, setLeftActive] = useState(false);
  const [isRightActive, setRightActive] = useState(false);

  useEffect(() => {
    if (!isLeftActive) return;
    if (isRightActive) setRightActive(false);

    setTimeout(() => {
      setLeftTimer({
        ...leftTimer,
        seconds: leftTimer.seconds + 1,
      });

      if (leftTimer.seconds == 59) {
        setLeftTimer({
          seconds: 0,
          minutes: leftTimer.minutes + 1,
        });
      }
    }, 1000);
  }, [leftTimer, isLeftActive]);
  useEffect(() => {
    if (!isRightActive) return;
    if (isLeftActive) setLeftActive(false);

    setTimeout(() => {
      setRightTimer({
        ...leftTimer,
        seconds: rightTimer.seconds + 1,
      });

      if (rightTimer.seconds == 59) {
        setRightTimer({
          seconds: 0,
          minutes: rightTimer.minutes + 1,
        });
      }
    }, 1000);
  }, [rightTimer, isRightActive]);

  const startLeftTime = () => {
    setLeftActive(!isLeftActive);
  };
  const startRightTime = () => {
    setRightActive(!isRightActive);
  };

  const resetTime = () => {
    setLeftTimer({
      seconds: 0,
      minutes: 0,
    });
    setRightTimer({
      seconds: 0,
      minutes: 0,
    });
    setLeftActive(false);
    setRightActive(false);
  };

  return (
    <View className="space-y-4">
      <View className="py-20 space-y-6 rounded-lg shadow-sm px-14 bg-secondary">
        <Text className="text-xl font-bold text-center text-medium text-dark">
          Tap the L or R button to start the timer
        </Text>
        <View className="flex-row justify-between">
          <View className="items-center space-y-2">
            <TouchableOpacity
              onPress={startLeftTime}
              className="w-20 h-20 shadow-md border-2 border-dark/60 rounded-full bg-[#4F8DD1]/10 items-center justify-center"
            >
              <Text className="text-lg font-medium">L</Text>
            </TouchableOpacity>
            <Text className="font-medium text-dark text-md">
              {String(leftTimer.minutes).padStart(2, "0")} :{" "}
              {String(leftTimer.seconds).padStart(2, "0")}
            </Text>
          </View>
          <View className="items-center space-y-2">
            <TouchableOpacity
              onPress={startRightTime}
              className="w-20 h-20 shadow-md border-2 border-dark/60 rounded-full bg-[#4F8DD1]/10 items-center justify-center"
            >
              <Text className="text-lg font-medium">R</Text>
            </TouchableOpacity>
            <Text className="font-medium text-dark text-md">
              {String(rightTimer.minutes).padStart(2, "0")} :{" "}
              {String(rightTimer.seconds).padStart(2, "0")}
            </Text>
          </View>
        </View>
      </View>
      {(leftTimer.seconds != 0 || leftTimer.minutes != 0) && <Text>hi</Text>}
      <View className="flex-row space-x-4">
        <TouchableOpacity
          onPress={resetTime}
          className="flex-1 p-2 rounded-md shadow-sm bg-red-500/40"
        >
          <Text className="font-medium text-center text-red-600">Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 p-2 rounded-md shadow-sm bg-red-500/40">
          <Text className="font-medium text-center text-red-600">Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BreastFeeding;
