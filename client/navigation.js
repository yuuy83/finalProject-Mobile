import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import React from "react";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import OrderPrepairingScreen from "./screens/OrderPrepairingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" options={{presentation:'modal'}} component={CartScreen} />
        <Stack.Screen name="OrderPrepairing" options={{presentation:'fullScreenModal'}} component={OrderPrepairingScreen} />
        <Stack.Screen name="Delivery"  options={{presentation:'fullScreenModal'}} component={DeliveryScreen} />
        <Stack.Screen name="Login" options={{presentation:'fullScreenModal'}} component={LoginScreen} ></Stack.Screen>
        <Stack.Screen name="Register" options={{presentation:'fullScreenModal'}} component={SignupScreen} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
