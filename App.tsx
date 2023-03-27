import React from "react";
import { QrScannerScreen } from "./src/QrScannerScreen";
import { MainStackParamList } from "./src/types/MainStackParamList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { AppTabParamList } from "./src/types/AppTabParamList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStack } from "./src/MainStack";

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Main"} component={MainStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
