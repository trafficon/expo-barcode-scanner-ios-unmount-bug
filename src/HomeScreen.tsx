import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MainStackParamList } from "./types/MainStackParamList";
import { useIsFocused } from "@react-navigation/native";

type HomeScreenProps = NativeStackScreenProps<MainStackParamList>;

export const HomeScreen = ({ navigation: { navigate } }: HomeScreenProps) => {
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      <Text>{isFocused ? "Focused" : "Unfocused"}</Text>

      <TouchableOpacity onPress={() => navigate("QrScanner")}>
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
});
