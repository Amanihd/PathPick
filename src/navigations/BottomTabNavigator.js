import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExploreScreen from "../screens/ExploreScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        let iconName;
        if (route.name === "Explore")
          iconName = route.focused ? "map" : "map-outline";
        else if (route.name === "Favorites")
          iconName = route.focused ? "bookmark" : "bookmark-outline";
        else if (route.name === "Profile")
          iconName = route.focused ? "person" : "person-outline";

        return {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
          tabBarActiveTintColor: "#4169E1",
          tabBarInactiveTintColor: "gray",
          headerStyle: { backgroundColor: "#4169E1" },
          headerTintColor: "white",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 12,
          },
          tabBarStyle: { padding: 10, height: 100 },
        };
      }}
    >
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
