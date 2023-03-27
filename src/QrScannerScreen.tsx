import React, { useEffect, useState } from "react";
import {
  BarCodeScannedCallback,
  BarCodeScanner,
  PermissionStatus,
} from "expo-barcode-scanner";
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CompositeScreenProps, useLinkTo } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { MainStackParamList } from "./types/MainStackParamList";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  barCodeScanner: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

type QrScannerScreenProps = NativeStackScreenProps<
  MainStackParamList,
  "QrScanner"
>;

//   CompositeScreenProps<
//   NativeStackScreenProps<AppStackParamList, "QRScanner">,
//   BottomTabScreenProps<MainTabParamList, "MapTab">
// >;

export const QrScannerScreen = ({
  navigation: { goBack },
}: QrScannerScreenProps) => {
  const [permissionLoading, setPermissionLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
      setPermissionLoading(false);
    })();
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = async ({ data }) => {
    setScanned(true);

    try {
      console.log(data);
    } catch (error: any) {
      Alert.alert("Scanned", data, [
        {
          text: "Again",
          onPress: () => setScanned(false),
        },
        {
          text: "Cancel",
          onPress: () => goBack(),
          style: "cancel",
        },
      ]);
    }
  };

  return !permissionLoading ? (
    <View style={styles.root}>
      {hasPermission && (
        <BarCodeScanner
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={styles.barCodeScanner}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      )}

      <View style={styles.container}>
        <TouchableOpacity onPress={() => goBack()}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : null;
};
