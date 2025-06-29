import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigations/StackNavigator"; 
import { FavoritesProvider } from "./src/context/FavoritesContext";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function App() {
    useEffect(() => {
      StatusBar.setBarStyle("light-content");
      StatusBar.setBackgroundColor("#4169E1");
    }, []);

  return (
    <FavoritesProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  );
}
