import { TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import InfoModal from "../../components/InfoModal";
import { useTailwind } from "tailwind-rn/dist";

import Move from "./components/Move";
import Wobble from "./components/Wobble";
import Rotate from "./components/Rotate";

const TransitionAnimation = () => {
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
    <ScrollView style={tw("flex")} showsVerticalScrollIndicator={false}>
      <InfoModal showInfoModal={showInfoModal} showInfo={showInfo} />
      <Move />
      <Wobble />
      <Rotate />
    </ScrollView>
  );
};

export default TransitionAnimation;
