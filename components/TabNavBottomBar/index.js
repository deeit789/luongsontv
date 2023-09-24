import Icon from "react-native-vector-icons/Ionicons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SCREEN_NAME } from "../../utils/common/const";

const styles = StyleSheet.create({
  itemNav: {
    flex: 1,
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  itemNavView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxNavBottom: {
    flexDirection: "row",
  },
});

const colorFocused = "#ffd325";
const colorUnFocused = "#666666";

const TabNavBottomBar = ({ state, descriptors, navigation }) => {
  const renderItemNavBottom = (route, isFocused) => {
    switch (route.name) {
      case SCREEN_NAME.HOME:
        return (
          <View style={styles.itemNavView}>
            <Icon
              name="home"
              size={24}
              color={isFocused ? colorFocused : colorUnFocused}
            />
            <Text
              style={{
                color: isFocused ? colorFocused : colorUnFocused,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Home
            </Text>
          </View>
        );
      case SCREEN_NAME.SCHEDULE:
        return (
          <View style={styles.itemNavView}>
            <Icon
              name="calendar"
              size={24}
              color={isFocused ? colorFocused : colorUnFocused}
            />
            <Text
              style={{
                color: isFocused ? colorFocused : colorUnFocused,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Lịch trình
            </Text>
          </View>
        );
      case SCREEN_NAME.HIGHLIGHT:
        return (
          <View style={styles.itemNavView}>
            <Icon
              name="star"
              size={24}
              color={isFocused ? colorFocused : colorUnFocused}
            />
            <Text
              style={{
                color: isFocused ? colorFocused : colorUnFocused,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Highlight
            </Text>
          </View>
        );
      case SCREEN_NAME.ODD:
        return (
          <View style={styles.itemNavView}>
            <Icon
              name="swap-vertical"
              size={24}
              color={isFocused ? colorFocused : colorUnFocused}
            />
            <Text
              style={{
                color: isFocused ? colorFocused : colorUnFocused,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Tỉ lệ kèo
            </Text>
          </View>
        );
      case SCREEN_NAME.LIVESCORE:
        return (
          <View style={styles.itemNavView}>
            <Icon
              name="football"
              size={24}
              color={isFocused ? colorFocused : colorUnFocused}
            />
            <Text
              style={{
                color: isFocused ? colorFocused : colorUnFocused,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Livescore
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.boxNavBottom}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.itemNav}
          >
            {renderItemNavBottom(route, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabNavBottomBar;
