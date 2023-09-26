// StackNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { SCREEN_NAME } from "../utils/common/const";
import FullScreenVideo from "../screens/FullScreenVideo";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={`${SCREEN_NAME.HOME}_screen`}
        component={HomeScreen}
      />
      <Stack.Screen
        name={SCREEN_NAME.FULL_SCREEN_VIDEO}
        component={FullScreenVideo}
        options={{
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
