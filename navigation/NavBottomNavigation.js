import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import { SCREEN_NAME } from "../utils/common/const";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HighlightScreen from "../screens/HighlightScreen";
import TabNavBottomBar from "../components/TabNavBottomBar";
import OddScreen from "../screens/OddScreen";
import LivescoreScreen from "../screens/LivescoreScreen";
import HomeStack from "./StackNavigator";

const Tab = createBottomTabNavigator();

const NavBottomNavigation = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabNavBottomBar {...props} />}>
      <Tab.Screen
        name={SCREEN_NAME.HOME}
        component={HomeStack}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen name={SCREEN_NAME.HOME} component={HomeScreen} />*/}
      <Tab.Screen name={SCREEN_NAME.SCHEDULE} component={ScheduleScreen} />
      <Tab.Screen name={SCREEN_NAME.HIGHLIGHT} component={HighlightScreen} />
      <Tab.Screen name={SCREEN_NAME.ODD} component={OddScreen} />
      <Tab.Screen name={SCREEN_NAME.LIVESCORE} component={LivescoreScreen} />
    </Tab.Navigator>
  );
};

export default NavBottomNavigation;
