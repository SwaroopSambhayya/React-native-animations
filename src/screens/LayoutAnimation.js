import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
  SafeAreaView,
  Linking,
} from "react-native";
import React, { useLayoutEffect, useRef, useState, useCallback } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { AntDesign } from "@expo/vector-icons";
import AnimationTile from "../components/AnimationTile";

import data from "../../data";
import { useNavigation } from "@react-navigation/native";
import AnimatedModal from "../components/AnimatedModal";
const LayoutAnimation = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const scrollRef = useRef();
  const [selectedIndex, setIndex] = useState(0);
  const [showInfo, showInfoModal] = useState(false);
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
  const openLink = useCallback(async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return (
    <View style={tw(" flex-1")}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={showInfo}
        presentationStyle="pageSheet"
      >
        <SafeAreaView style={tw(" flex-1  items-center ")}>
          <View style={tw("bg-white w-11/12   ")}>
            <View style={tw("flex flex-row justify-center items-center")}>
              <Text style={tw("text-lg font-bold mt-2 ")}>Reanimated</Text>
              <TouchableOpacity
                onPress={() => showInfoModal(false)}
                style={tw("absolute right-0 top-3")}
              >
                <AntDesign name="close" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: "https://miro.medium.com/max/1024/1*v_QLdhh1TMmuxGXw-h_IDw.png",
              }}
              style={tw("w-full my-5 h-48")}
              resizeMode="contain"
            />
            <Text style={tw("text-base text-justify pb-3 ")}>
              This Animated demonstration is powered by{" "}
              <TouchableOpacity
                onPress={() => {
                  openLink(
                    "https://docs.swmansion.com/react-native-reanimated/docs/"
                  );
                }}
              >
                <Text
                  style={{
                    color: "#6365f1",
                    fontWeight: "600",
                    fontSize: 16,
                  }}
                >
                  Reanimated 2
                </Text>
              </TouchableOpacity>{" "}
              and{" "}
              <TouchableOpacity
                onPress={() => {
                  openLink("https://reactnative.dev/docs/layoutanimation");
                }}
              >
                <Text
                  style={{ color: "#6365f1", fontWeight: "600", fontSize: 16 }}
                >
                  LayoutAnimation
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </SafeAreaView>
      </Modal>

      <View style={tw("mx-5 pb-5")}>
        <FlatList
          keyExtractor={(item) => item.title}
          data={data}
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <AnimationTile
              title={item.title}
              description={item.description}
              image={item.image}
              name={item.name}
              entryType={item.entryType}
              exitType={item.exitType}
              isLast={index == data.length - 1}
              isFirst={index == 0}
              onTap={() => {
                setIndex(index);
              }}
            />
          )}
        />
      </View>
      {selectedIndex !== 0 && (
        <AnimatedModal
          characterInfo={data[selectedIndex]}
          closeModal={() => setIndex(0)}
        />
      )}
    </View>
  );
};

export default LayoutAnimation;
