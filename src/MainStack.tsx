import React from "react";
import { HomeScreen } from "./HomeScreen";
import { QrScannerScreen } from "./QrScannerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "./types/MainStackParamList";

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="QrScanner" component={QrScannerScreen} />
    </Stack.Navigator>
  );
};
