import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import EasingTransition from "./src/screens/EasingTransition";
import LayoutAnimation from "./src/screens/LayoutAnimation";
import { Button, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <Drawer.Navigator screenOptions={{ drawerActiveTintColor: "#6366f1" }}>
          <Drawer.Screen name="Easing" component={EasingTransition} />
          <Drawer.Screen name="LayoutAnimation" component={LayoutAnimation} />
        </Drawer.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
