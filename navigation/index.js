import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Screens
import Welcome from "../screens/Welcome";
import Rewards from "../screens/Rewards";
import Trip from "../screens/Trip";

//import styles
import { theme } from "../constants";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackTitleVisible:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Rewards" component={Rewards} />
        <Stack.Screen name="Trip" component={Trip} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
