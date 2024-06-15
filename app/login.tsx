import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginPage = () => {
  return (
    <View className="flex-1 bg-white">
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/8e94/cb08/555fd8defd369eb6fbbb12e7606d1f1d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W~ehDVt9UsmOUmSwPoxGMOik-i~ZRPVpzr-XGd0J3XEeS83VHUYnrfZsibw8diXPu7WxSs60gYVqZ3liuxW~~i2HDWUyLW8RpiKYLFEaGSnWFANeqS3teTeHef1B5VFOPRy7wv0HGbqmsdIdXnFeNfu9GoCCnmfKoVxHhBPB~jAVUyiuMz1TuIXfPAugiWZZdv56WHxFAkcaxum3ZefJR8NSuqxls-My-7l6IDhve9jUhuFXyggue0IxCj-aIEzyWf1nGhOB6630AzE7tNvRXKcFTaW2fRcPiV7qBqZKb3atth0vjqaPb31Cyefgs5F0fP7F6FVFIWJz5iL4y41t3g__",
        }}
        className="flex-1"
      />
      <View className="p-4 gap-4 flex-1 justify-center">
        <Text className="text-2xl font-medium text-center text-primary">
          Sign in to New Parent
        </Text>
        <TextInput
          autoCapitalize={"none"}
          className="border-[0.5px] bg-white/60 border-dark rounded-md p-4"
          placeholder="Email Address"
        />
        <TextInput
          secureTextEntry
          className="border-[0.5px] bg-white/60 border-dark rounded-md p-4"
          placeholder="Password"
        />
        <TouchableOpacity className="bg-dark justify-center flex-row p-4 rounded-md shadow-2xl border">
          <Text className="font-medium text-white">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="font-medium text-dark">Create Account</Text>
        </TouchableOpacity>
        <View className="flex-row items-center space-x-2">
          <View className="bg-gray-400 h-[0.5px] flex-1 " />
          <Text>OR</Text>
          <View className="bg-gray-400 h-[0.5px] flex-1 " />
        </View>
        <View className="flex-row justify-between space-x-2">
          <TouchableOpacity className="flex-1 justify-center flex-row p-4 rounded-md shadow-2xl border">
            <Text className="font-medium text-dark">Login using Google</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 justify-center flex-row p-4 rounded-md shadow-2xl border">
            <Text className="font-medium text-dark">Login using Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
