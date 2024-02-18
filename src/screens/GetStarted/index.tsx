import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants";
const GetStartedImage = require("../../../assets/images/getStarted.jpg");

const GetStarted = () => {
  const { navigate } = useNavigation();
  const insets = useSafeAreaInsets();
  const IMAGE_HEIGHT = SCREEN_HEIGHT - insets.bottom - insets.top - 2 * 64;
  const IMAGE_WIDTH = SCREEN_WIDTH - insets.left - insets.right;

  const goToHome = () => {
    navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.backgroundImage,
          { height: IMAGE_HEIGHT, width: IMAGE_WIDTH },
        ]}
        source={GetStartedImage}
      />
      <View
        style={[
          styles.footer,
          {
            width: IMAGE_WIDTH,
          },
        ]}
      >
        <Text style={styles.title}>Uncover your next cinematic adventure.</Text>
        <Pressable onPress={goToHome} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GetStarted;
