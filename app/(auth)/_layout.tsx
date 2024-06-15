import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter, useSegments } from "expo-router";

const AuthLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  useEffect(() => {
    if (!isLoaded) return;

    const isInAuth = segments.includes("(auth)");
    console.log(isInAuth);

    if (!isSignedIn && isInAuth) {
      console.log("Not Signed In");
      router.replace("/login");
    }
  }, [isSignedIn, isLoaded]);

  if (!isLoaded) return <ActivityIndicator />;

  return (
    <View>
      <Text>AuthLayout</Text>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
