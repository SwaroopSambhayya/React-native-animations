import {
  View,
  Text,
  Modal,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useCallback } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { AntDesign } from "@expo/vector-icons";

const InfoModal = ({ showInfoModal, showInfo }) => {
  const tw = useTailwind();

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
          <Text style={tw("text-base  pb-3 ")}>
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
  );
};

export default InfoModal;
