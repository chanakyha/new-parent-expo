import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

const LoginPage = () => {
  useWarmUpBrowser();

  const router = useRouter();

  enum Strategy {
    Google = "oauth_google",
    Apple = "oauth_apple",
  }

  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });

  const onSelectAuth = useCallback(async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();
      if (createdSessionId) {
        setActive!({ session: createdSessionId }).then(() => {
          router.replace("/(tabs)");
        });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View className="flex-1 bg-white">
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/8e94/cb08/555fd8defd369eb6fbbb12e7606d1f1d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W~ehDVt9UsmOUmSwPoxGMOik-i~ZRPVpzr-XGd0J3XEeS83VHUYnrfZsibw8diXPu7WxSs60gYVqZ3liuxW~~i2HDWUyLW8RpiKYLFEaGSnWFANeqS3teTeHef1B5VFOPRy7wv0HGbqmsdIdXnFeNfu9GoCCnmfKoVxHhBPB~jAVUyiuMz1TuIXfPAugiWZZdv56WHxFAkcaxum3ZefJR8NSuqxls-My-7l6IDhve9jUhuFXyggue0IxCj-aIEzyWf1nGhOB6630AzE7tNvRXKcFTaW2fRcPiV7qBqZKb3atth0vjqaPb31Cyefgs5F0fP7F6FVFIWJz5iL4y41t3g__",
        }}
        className="absolute top-0 w-[100%] h-[100%] opacity-10"
      />
      <KeyboardAvoidingView
        behavior="padding"
        className="justify-center flex-1 gap-4 p-4"
      >
        <Text className="text-2xl font-medium text-center text-primary">
          Sign in to New Parent
        </Text>

        <TextInput
          autoCapitalize={"none"}
          placeholderTextColor={"#000"}
          className="border-[0.5px] border-dark rounded-md p-4"
          placeholder="Email Address"
        />
        <TextInput
          placeholderTextColor={"#000"}
          secureTextEntry
          className="border-[0.5px] border-dark rounded-md p-4"
          placeholder="Password"
        />

        <TouchableOpacity className="flex-row justify-center p-4 border rounded-md shadow-2xl bg-dark">
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
          <TouchableOpacity
            onPress={() => onSelectAuth(Strategy.Google)}
            className="flex-row justify-center flex-1 p-4 border rounded-md shadow-2xl"
          >
            <Text className="font-medium text-dark">Login using Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onSelectAuth(Strategy.Apple)}
            className="flex-row justify-center flex-1 p-4 border rounded-md shadow-2xl"
          >
            <Text className="font-medium text-dark">Login using Apple</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
