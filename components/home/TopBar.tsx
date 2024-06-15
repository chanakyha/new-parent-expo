import { logs } from "@/constants/contants";
import { Link } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

const TopBar = () => {
  return (
    <View className="bg-white flex-row items-center justify-between p-4">
      {logs.map((log, index) => {
        return (
          <Link href={log.href} asChild key={index}>
            <TouchableOpacity className="items-center">
              <Image source={log.topBarImage!} className="" />
              <Text className="font-medium">{log.name}</Text>
            </TouchableOpacity>
          </Link>
        );
      })}
    </View>
  );
};

export default TopBar;
