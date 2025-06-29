import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import DestinationDetailsScreen from "../screens/DestinationDetailsScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DestinationDetails"
        component={DestinationDetailsScreen}
         options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
