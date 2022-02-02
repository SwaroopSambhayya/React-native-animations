import {
  View,
  Text,
  TouchableOpacity,
  Image,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { AntDesign } from "@expo/vector-icons";
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

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AnimationTile = ({
  title,
  description,
  name,
  image,
  entryType,
  isFirst,
  onTap,
}) => {
  const tw = useTailwind();
  const [expanded, setIsExpanded] = useState(false);
  return (
    <Animated.View
      style={tw(`mt-5`)}
      layout={Layout.springify()}
      entering={SlideInRight}
    >
      <View>
        <TouchableOpacity
          onPress={() => {
            if (entryType == null) {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );

              setIsExpanded(!expanded);
            } else {
              onTap();
            }
          }}
        >
          <View
            style={[
              tw(
                "flex flex-row w-full  p-4 items-center justify-between  bg-white"
              ),
              expanded
                ? { borderTopStartRadius: 10, borderTopEndRadius: 10 }
                : { borderRadius: 10 },
            ]}
          >
            <Text style={tw("font-semibold text-base")}>{title}</Text>
            {isFirst && (
              <AntDesign
                name={!expanded ? "downcircleo" : "upcircleo"}
                size={18}
                color="black"
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
      {expanded && isFirst && (
        <Animated.View
          entering={entryType}
          style={[
            tw("bg-white  "),
            { borderBottomEndRadius: 10, borderBottomStartRadius: 10 },
          ]}
        >
          <Image
            source={{
              uri: image,
            }}
            style={[tw("w-full h-80  "), { resizeMode: "cover" }]}
          />
          <View style={tw("mt-2 flex-row justify-center")}>
            <Text style={tw("text-lg font-bold")}>{name}</Text>
          </View>
          <Text style={tw("p-4 text-base text-justify ")} allowFontScaling>
            {description}
          </Text>
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default AnimationTile;
