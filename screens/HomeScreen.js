import React, { useLayoutEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomVideoPlayer from "../components/CustomVideoPlayer";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="bg-black">
          <CustomVideoPlayer
            videoSource={"https://media.553328.com/videos/keovip.m3u8"}
          />
        </View>
        <View>
          <Text>2</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
