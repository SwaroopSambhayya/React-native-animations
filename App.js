import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import EasingTransition from "./src/screens/EasingTransition";
import LayoutAnimation from "./src/screens/LayoutAnimation";
import TransitionAnimation from "./src/screens/transtionanimations/TransitionAnimation";
import PanAnimations from "./src/screens/pananimations/PanAnimations";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <Drawer.Navigator
          screenOptions={{ drawerActiveTintColor: "#6366f1" }}
          initialRouteName="Pan Animation"
        >
          <Drawer.Screen name="Easing" component={EasingTransition} />
          <Drawer.Screen name="Layout Animation" component={LayoutAnimation} />
          <Drawer.Screen
            name="Transform Translate"
            component={TransitionAnimation}
          />
          <Drawer.Screen name="Pan Animation" component={PanAnimations} />
        </Drawer.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
