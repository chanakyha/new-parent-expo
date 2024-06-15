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
  View,
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

    if (!isSignedIn && isInAuth) {
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

        headerLeftContainerStyle: {
          paddingHorizontal: 24,
        },
        headerTitleContainerStyle: { paddingVertical: 20 },
        headerRightContainerStyle: {
          paddingHorizontal: 24,
        },

        headerLeft: () => (
          <Text className="font-medium text-xl">{user?.firstName}</Text>
        ),
        headerTitle: () => <StatusBar style="dark" />,
        headerRight: () => (
          <TouchableOpacity onLongPress={onSignOut}>
            <Image
              source={{
                uri: user?.imageUrl,
              }}
              className="w-7 h-7 rounded-full"
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
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
