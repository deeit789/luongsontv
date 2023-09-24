import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import NavBottomNavigation from "./navigation/NavBottomNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <NavBottomNavigation />
    </NavigationContainer>
  );
}
