import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import CustomVideoPlayer from "../components/CustomVideoPlayer";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

const FullScreenVideo = ({ route }) => {
  const navigation = useNavigation();
  const { videoSource } = route.params;
  StatusBar.setHidden(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarVisible: false,
    });
  }, [route]);
  return (
    <View>
      <CustomVideoPlayer videoSource={videoSource} />
    </View>
  );
};

export default FullScreenVideo;
