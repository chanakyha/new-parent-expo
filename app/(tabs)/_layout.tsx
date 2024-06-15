import { useAuth, useUser } from "@clerk/clerk-expo";
import { Tabs, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";

const TabsLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
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

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
