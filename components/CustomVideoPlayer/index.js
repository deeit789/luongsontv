import React, { useEffect, useRef, useState } from "react";
import { Video } from "expo-av";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as ScreenOrientation from "expo-screen-orientation";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_NAME } from "../../utils/common/const";

const CustomVideoPlayer = ({ videoSource }) => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullScreen = async () => {
    if (isFullScreen) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
      navigation.goBack();
    } else {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
      navigation.navigate(SCREEN_NAME.FULL_SCREEN_VIDEO, {
        videoSource: videoSource,
      });
    }

    setIsFullScreen(!isFullScreen);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: videoSource }}
        style={isFullScreen ? styles.fullScreenVideo : styles.video}
        shouldPlay={isPlaying}
        useNativeControls={false}
        resizeMode="contain"
        isLooping
        onFullscreenUpdate={async (event) => {
          setIsFullScreen(
            event.fullscreenUpdate ===
              Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT
          );
        }}
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={togglePlayPause}>
          {isPlaying ? (
            <Icon name="pause" size={22} color="#ffffff" />
          ) : (
            <Icon name="play" size={22} color="#ffffff" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFullScreen}>
          {isFullScreen ? (
            <Icon name="contract" size={22} color="#ffffff" />
          ) : (
            <Icon name="expand" size={22} color="#ffffff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  fullScreenVideo: {
    flex: 1,
    zIndex: 999,
  },
  controls: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default CustomVideoPlayer;
