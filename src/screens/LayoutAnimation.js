import {
  View,
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
import InfoModal from "../components/InfoModal";
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

  return (
    <View style={tw(" flex-1")}>
      <InfoModal showInfoModal={showInfoModal} showInfo={showInfo} />
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
