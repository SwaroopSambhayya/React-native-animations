import { View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const Wobble = () => {
  const tw = useTailwind();
  const rotate = useSharedValue(0);

  const wobbleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotate.value}deg`,
        },
      ],
    };
  });
  return (
    <View>
      <Animated.View
        style={[
          tw(" w-24 h-24 self-center my-5 bg-indigo-500 rounded-lg"),
          wobbleStyle,
        ]}
      />
      <Button
        color={"#6366f1"}
        title="Wobble"
        onPress={() => {
          rotate.value = withSequence(
            withTiming(-10, { duration: 50 }),
            withRepeat(withTiming(10, { duration: 100 }), 6, true),
            withTiming(0, { duration: 50 })
          );
        }}
      />
    </View>
  );
};

export default Wobble;
