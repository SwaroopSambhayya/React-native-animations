import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import React from "react";
import Animated, {
  ZoomInRotate,
  Layout,
  SlideInRight,
  SlideOutRight,
  FadeInUp,
  FadeOutUp,
  ZoomOutRotate,
  BounceIn,
  BounceOut,
  FlipInYRight,
  FlipOutYRight,
} from "react-native-reanimated";
import { useTailwind } from "tailwind-rn/dist";

const AnimatedModal = ({ characterInfo, closeModal }) => {
  const tw = useTailwind();

  return (
    <View
      style={[
        tw(
          "absolute z-50 bg-black/40   flex justify-center items-center h-full  w-full "
        ),
        { borderBottomEndRadius: 10, borderBottomStartRadius: 10 },
      ]}
    >
      <Animated.View
        style={tw("w-11/12 bg-white  rounded-lg")}
        entering={characterInfo.entryType}
        exiting={characterInfo.exitType}
      >
        <Image
          source={{
            uri: characterInfo.image,
          }}
          style={[
            tw("w-full h-80 "),
            {
              resizeMode: "cover",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            },
          ]}
        />
        <TouchableOpacity
          onPress={() => closeModal()}
          style={tw("absolute right-2 top-2")}
        >
          <AntDesign name="closecircleo" size={22} color="white" />
        </TouchableOpacity>
        <View style={tw("mt-2 flex-row justify-center")}>
          <Text style={tw("text-lg font-bold")}>{characterInfo.name}</Text>
        </View>
        <Text style={tw("p-4 text-base text-justify ")} allowFontScaling>
          {characterInfo.description}
        </Text>
      </Animated.View>
    </View>
  );
};

export default AnimatedModal;
