import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Entypo } from "@expo/vector-icons";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  SlideInDown,
  useSharedValue,
  withSpring,
  Layout,
  SlideInUp,
  SlideOutUp,
  withTiming,
  Easing,
} from "react-native-reanimated";

const ExampleUseCase = () => {
  const tw = useTailwind();
  const yaxis = useSharedValue(0);
  const count = useSharedValue(10);
  const [textvalue, setText] = useState(10);
  const opacity = useSharedValue(1);

  const handleGesture = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      opacity.value = withTiming(0, { duration: 400, easing: Easing.in });
    },
    onFail: (event, ctx) => {
      opacity.value = withTiming(1, { duration: 400, easing: Easing.in });
    },

    onActive: (event, ctx) => {
      if (event.translationY > -28 && event.translationY < 28) {
        yaxis.value = event.translationY;
      }
    },
    onEnd: (event, ctx) => {
      if (yaxis.value > 0) {
        count.value = count.value - 1;
      } else if (yaxis.value < 0) {
        count.value = count.value + 1;
      }

      yaxis.value = withSpring(0, { mass: 2 });
      opacity.value = withTiming(1, { duration: 400, easing: Easing.in });
    },
  });
  setCounter = (val) => {
    setText(val);
  };

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: yaxis.value }],
    };
  });
  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: opacity.value }],
    };
  });

  useDerivedValue(() => {
    runOnJS(setCounter)(count.value);
  });
  return (
    <View
      style={tw("flex-1 bg-white h-48 w-11/12 rounded-lg mx-2 self-center")}
    >
      <Text style={tw("self-center text-base font-semibold mt-2")}>
        Example Use Case
      </Text>
      <View style={tw("w-full h-px bg-slate-200 my-2 ")}></View>
      <View style={tw("self-center items-center my-2")}>
        <Entypo
          name="chevron-up"
          size={20}
          color="#b8b9f2"
          style={tw("my-1")}
        />
        <PanGestureHandler onGestureEvent={handleGesture}>
          <Animated.View
            style={[
              tw(
                "w-16 h-16 rounded-2xl flex justify-center z-10 items-center bg-indigo-500"
              ),
              boxStyle,
            ]}
          >
            <Animated.Text
              entering={SlideInUp}
              exiting={SlideOutUp}
              layout={Layout.springify()}
              style={[tw("font-bold text-3xl  text-white"), textStyle]}
            >
              {textvalue}
            </Animated.Text>
          </Animated.View>
        </PanGestureHandler>
        <Entypo
          name="chevron-down"
          size={20}
          color="#b8b9f2"
          style={tw("my-1")}
        />
      </View>
    </View>
  );
};

export default ExampleUseCase;
