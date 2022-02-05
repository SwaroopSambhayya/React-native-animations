import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn/dist";

const ContinuousGestureHandler = () => {
  const tw = useTailwind();
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const { width, height } = useWindowDimensions();
  const availableSpace = height - 288;
  const maxValueY = 90;
  const minValueY = -90;
  const maxValueX = 112;
  const minValueX = -112;
  const pressed = useSharedValue(false);
  const handleGesture = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onActive: (event, ctx) => {
      x.value =
        event.translationX < maxValueX && event.translationX > minValueX
          ? event.translationX
          : x.value;
      y.value =
        event.translationY < maxValueY && event.translationY > minValueY
          ? event.translationY
          : y.value;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      x.value = withSpring(0);
      y.value = withSpring(0);
    },
  });
  const circleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        {
          translateY: y.value,
        },
      ],

      backgroundColor: pressed.value ? "#782ad7" : "#6366f1",
    };
  });

  return (
    <View style={tw("self-center rounded-lg bg-white items-center my-5")}>
      <View style={tw("mt-2")}>
        <Text style={tw("text-base font-semibold ")}>
          Pan / Drag Gesture Handler
        </Text>
      </View>
      <View
        style={[
          tw("flex  w-full bg-slate-200 mt-2 h-px"),
          { width: width - 70 },
        ]}
      ></View>
      <View
        style={[
          tw(" items-center justify-center"),
          { width: 320, height: 280 },
        ]}
      >
        <PanGestureHandler onGestureEvent={handleGesture}>
          <Animated.View
            style={[tw("w-24 h-24 rounded-full bg-indigo-500"), circleStyle]}
          />
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default ContinuousGestureHandler;
