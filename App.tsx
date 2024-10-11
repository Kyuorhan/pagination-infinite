import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import {
  AccessibilityInfo,
  Alert,
  Linking,
  LogBox,
  Platform,
} from "react-native";
import { fontFamily } from "@/theme";
import Routes from "@/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = Font.useFonts(fontFamily);
  const [loaded, setLoaded] = useState(false);

  async function infoReady() {
    // Ignorar a mensagem de configuração de movimento reduzido
    LogBox.ignoreLogs([
      "[Reanimated] Reduced motion setting is enabled on this device.",
    ]);

    try {
      const isReduceMotionEnabled =
        await AccessibilityInfo.isReduceMotionEnabled();
      if (isReduceMotionEnabled) {
        Alert.alert(
          "Ajustes de Acessibilidade",
          Platform.OS === "ios"
            ? "Para uma melhor experiência, acesse na configuração de acessibilidade e desative a opção de movimento reduzido."
            : "Para uma melhor experiência, acesse na configuração de acessibilidade e desative a opção de remover animação.",
          [
            {
              text: "Cancelar",
              style: "cancel",
            },
            {
              text: "Abrir Configurações",
              onPress: () => {
                if (Platform.OS === "ios") {
                  Linking.openURL("App-Prefs:root=General&path=ACCESSIBILITY");
                } else if (Platform.OS === "android") {
                  Linking.sendIntent("android.settings.ACCESSIBILITY_SETTINGS"); //  abre a tela de configurações do dispositivo
                  // Linking.openSettings(); //  abre a tela de informações do aplicativo,
                }
              },
            },
          ]
        );
      }

      if (fontsLoaded) {
        setLoaded(true);
        SplashScreen.hideAsync();
      }
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    infoReady();
  }, [fontsLoaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
