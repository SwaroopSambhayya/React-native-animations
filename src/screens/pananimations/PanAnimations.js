import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn/dist";
import { AntDesign } from "@expo/vector-icons";
import InfoModal from "../../components/InfoModal";
import SimpleGestureHandler from "./components/SimpleGestureHandler";
import ContinuousGestureHandler from "./components/ContinuousGestureHandler";
import ExampleUseCase from "./components/ExampleUseCase";

const PanAnimations = () => {
  const navigation = useNavigation();
  const [showInfo, showInfoModal] = useState(false);
  const tw = useTailwind();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={tw("px-3")}
          onPress={() => showInfoModal(true)}
        >
          <AntDesign name="infocirlceo" size={20} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ScrollView>
      <InfoModal showInfoModal={showInfoModal} showInfo={showInfo} />
      <SimpleGestureHandler />
      <ContinuousGestureHandler />
      <ExampleUseCase />
      <View style={tw("h-24 w-24")} />
    </ScrollView>
  );
};

export default PanAnimations;
