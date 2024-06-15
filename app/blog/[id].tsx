import { View, Text, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { babycareBlogs } from "@/constants/contants";

import Markdown from "react-native-markdown-display";

const BlogsDescription = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const currentBlog = babycareBlogs.find(
    (blog) => blog.id.toLocaleString() === id
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Blog ${id}`,
    });
  }, [navigation]);
  return (
    <ScrollView className="">
      <Text className="text-center text-lg font-bold text-primary p-4">
        {currentBlog?.title}
      </Text>
      <Image source={currentBlog?.image} className="w-full" />
      <View className="p-4">
        <Markdown>{currentBlog?.markdownDescription}</Markdown>
      </View>
    </ScrollView>
  );
};

export default BlogsDescription;
