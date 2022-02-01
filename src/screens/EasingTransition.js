import {
  View,
  Text,
  Easing,
  Animated,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useTailwind } from "tailwind-rn";
import { TouchableOpacity } from "react-native-gesture-handler";

const EasingTransition = () => {
  const tw = useTailwind();
  const { height } = useWindowDimensions();
  const [selectedType, setType] = useState("Bounce");

  let opacity = useRef(new Animated.Value(0)).current;

  const animation = (ease) => {
    opacity.setValue(0);

    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      easing: ease,
      useNativeDriver: false,
    }).start();
  };
  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 120],
  });

  useEffect(() => {
    animation(Easing.bounce);
  }, []);

  var data = [
    { title: "Bounce", type: Easing.bounce },
    { title: "Ease", type: Easing.ease },
    { title: "Elastic", type: Easing.elastic(4) },
    { title: "Linear", type: Easing.linear },
    { title: "Quad", type: Easing.quad },
    { title: "Cubic", type: Easing.cubic },
    { title: "Bezier", type: Easing.bezier(0, 2, 1, -1) },
    { title: "Circle", type: Easing.circle },
    { title: "Exponential", type: Easing.exp },
    { title: "Sin", type: Easing.sin },
    {
      title: "In + Bounce",
      type: Easing.in(Easing.bounce),
    },
    {
      title: "Out + Exp",
      type: Easing.out(Easing.exp),
    },
    {
      title: "InOut + Elastic",
      type: Easing.inOut(Easing.elastic(1)),
    },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.title}
        data={data}
        style={{ marginTop: height * 0.3, marginBottom: 20 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[
                tw("p-4 mx-3 my-[3.5] flex rounded justify-center"),
                {
                  backgroundColor:
                    selectedType === item.title ? "#e9eafb" : "#fff",
                },
              ]}
              onPress={() => {
                animation(item.type);
                setType(item.title);
              }}
            >
              <Text
                style={{
                  color: selectedType === item.title ? "#6365f1" : "#000",
                  fontSize: 16,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <Animated.View
        style={tw(
          "absolute h-1/3  flex justify-center items-center  left-0 top-0 right-0 bg-black"
        )}
      >
        <Animated.View
          style={[
            tw(" w-48 h-48 rounded-lg bg-indigo-500"),

            {
              opacity: opacity,
              width: size,
              height: size,
            },
          ]}
        ></Animated.View>
      </Animated.View>
    </View>
  );
};

export default EasingTransition;
