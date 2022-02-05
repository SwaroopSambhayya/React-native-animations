import { View, Text } from "react-native";
import React from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { TapGestureHandler } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn/dist";

const SimpleGestureHandler = () => {
  const pressed = useSharedValue(false);
  const tw = useTailwind();

  const handleEvent = useAnimatedGestureHandler({
    onStart: (evt, ctx) => {
      pressed.value = true;
    },
    onFinish: (evt, ctx) => {
      pressed.value = false;
    },
  });
  const circleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(pressed.value ? 1.5 : 1),
        },
      ],
      backgroundColor: pressed.value ? "#782ad7" : "#6366f1",
    };
  });

  return (
    <View
      style={tw(
        "w-11/12 flex my-5 rounded-lg drop-shadow-lg self-center  bg-white  items-center h-52"
      )}
    >
      <View style={tw("mt-2")}>
        <Text style={tw("text-base font-semibold")}>Tap Gesture Handler</Text>
      </View>
      <View style={tw("w-full h-px bg-slate-200 my-2 ")}></View>
      <View style={tw("flex-1 justify-center")}>
        <TapGestureHandler onGestureEvent={handleEvent}>
          <Animated.View
            style={[tw("w-24 h-24 rounded-full bg-indigo-500"), circleStyle]}
          />
        </TapGestureHandler>
      </View>
    </View>
  );
};

export default SimpleGestureHandler;
