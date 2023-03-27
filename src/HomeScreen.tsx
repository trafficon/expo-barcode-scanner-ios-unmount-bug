import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MainStackParamList } from "./types/MainStackParamList";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

type HomeScreenProps = NativeStackScreenProps<MainStackParamList>;

export const HomeScreen = ({ navigation: { navigate } }: HomeScreenProps) => {
  const [renderAnimated, setRenderAnimated] = useState(false);

  return (
    <View style={styles.container}>
      {renderAnimated && (
        <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
          <Text>Animated.View</Text>
        </Animated.View>
      )}

      <TouchableOpacity
        onPress={() => setRenderAnimated((prevState) => !prevState)}
        style={styles.button}
      >
        <Text>Toggle Render of Animated</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigate("QrScanner")}
        style={styles.button}
      >
        <Text>Navigate to Bar Code Scanner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 64,
  },
});
