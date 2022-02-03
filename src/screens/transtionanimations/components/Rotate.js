import { Button, View } from "react-native";
import React from "react";

import { useTailwind } from "tailwind-rn/dist";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Rotate = () => {
  const tw = useTailwind();
  const rotate2 = useSharedValue(0);

  const rotate90 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotate2.value}deg`,
        },
      ],
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          tw(" w-24 h-24 self-center my-5 bg-indigo-500 rounded-lg"),
          rotate90,
        ]}
      />
      <Button
        color={"#6366f1"}
        title="Rotate"
        onPress={() => {
          rotate2.value =
            rotate2.value >= 1000
              ? withTiming(45, { duration: 100, easing: Easing.bounce })
              : withTiming(rotate2.value + 45, {
                  duration: 500,
                  easing: Easing.bounce,
                });
        }}
      />
    </View>
  );
};

export default Rotate;
