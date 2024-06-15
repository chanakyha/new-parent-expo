import { Colors } from "@/constants/Colors";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TabsLayout = () => {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!isLoaded) return;

    const isInAuth = segments.includes("(tabs)");
    console.log("User => ", user);

    if (!isSignedIn && isInAuth) {
      console.log("Not Signed In");
      router.replace("/login");
    }
  }, [isSignedIn, isLoaded]);

  if (!isLoaded) return <ActivityIndicator />;

  const onSignOut = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to Log Out ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Log out Canceled"),
          style: "destructive",
        },
        {
          text: "Log Out",
          onPress: () => signOut(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        header: () => (
          <SafeAreaView className="bg-white flex-row justify-between items-center px-4">
            <Text className="font-medium text-2xl">{user?.firstName}</Text>
            <TouchableOpacity onLongPress={onSignOut}>
              <Image
                source={{
                  uri: user?.imageUrl,
                }}
                className="w-10 h-10 rounded-full"
              />
            </TouchableOpacity>

            <StatusBar style="dark" />
          </SafeAreaView>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Daily lOG",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="daily-log"
        options={{
          tabBarLabel: "Daily Log",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="memories"
        options={{
          tabBarLabel: "Memories",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="file-tray-full" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="evolution"
        options={{
          tabBarLabel: "Evolution",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cellular" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
