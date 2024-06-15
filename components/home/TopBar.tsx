import { logs } from "@/constants/contants";
import { View, Text, Image, TouchableOpacity } from "react-native";

const TopBar = () => {
  return (
    <View className="bg-white flex-row items-center justify-between p-4">
      {logs.map((log, index) => {
        return (
          <TouchableOpacity className="items-center" key={index}>
            <Image source={log.topBarImage!} className="" />
            <Text className="font-medium">{log.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopBar;
