import { View, Button, useWindowDimensions } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const Move = () => {
  const { width } = useWindowDimensions();

  const offset1 = useSharedValue(width / 2 - 50);
  const offset2 = useSharedValue(0);
  const tw = useTailwind();
  var prevOffset1Value = width / 2 - 50;
  var initialOffset1Set = false;
  const horizontalStates = [width / 2 - 50, 10, width - 106];

  const setOffset1 = () => {
    if (!initialOffset1Set) {
      prevOffset1Value = offset1.value;
      offset1.value = horizontalStates[1];
      offset2.value = -96;
      initialOffset1Set = true;
    } else if (offset1.value == horizontalStates[1]) {
      prevOffset1Value = horizontalStates[1];

      offset1.value = horizontalStates[0];
      offset2.value = 0;
    } else if (offset1.value == horizontalStates[2]) {
      prevOffset1Value = horizontalStates[2];

      offset1.value = horizontalStates[0];
      offset2.value = 0;
    } else {
      if (prevOffset1Value == horizontalStates[1]) {
        offset1.value = horizontalStates[2];
      } else offset1.value = horizontalStates[1];
      offset2.value = -96;
    }
  };
  const boxFirstStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset1.value, {
            stiffness: offset2.value == 0 ? 50 : 160,
          }),
        },
      ],
    };
  });
  const boxSecondStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(offset2.value, {
            stiffness:
              offset1.value == horizontalStates[1] || horizontalStates[2]
                ? 150
                : 50,
          }),
        },
      ],
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          tw(" w-24 h-24  my-5  bg-indigo-500 rounded-lg"),
          boxFirstStyle,
        ]}
      />
      <Animated.View
        style={[
          tw(" w-24 h-24 self-center my-5 bg-indigo-500 rounded-lg"),
          boxSecondStyle,
        ]}
      />
      <Button color={"#6366f1"} onPress={setOffset1} title="Move" />
    </View>
  );
};

export default Move;
