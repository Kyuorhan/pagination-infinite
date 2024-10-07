import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
// import {
//   useFonts as userFontPoppins,
//   Poppins_700Bold,
//   Poppins_600SemiBold,
//   Poppins_500Medium,
//   Poppins_400Regular,
// } from "@expo-google-fonts/poppins";
// import {
//   useFonts as userFontsInter,
//   Inter_700Bold,
//   Inter_600SemiBold,
//   Inter_500Medium,
//   Inter_400Regular,
// } from "@expo-google-fonts/inter";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Inter_700Bold: require("@expo-google-fonts/inter/Inter-Bold.ttf"),
    Inter_600SemiBold: require("@expo-google-fonts/inter/Inter-SemiBold.ttf"),
    Inter_500Medium: require("@expo-google-fonts/inter/Inter-Medium.ttf"),
    Inter_400Regular: require("@expo-google-fonts/inter/Inter-Regular.ttf"),
    Poppins_700Bold: require("@expo-google-fonts/poppins/Poppins-Bold.ttf"),
    Poppins_600SemiBold: require("@expo-google-fonts/poppins/Poppins-SemiBold.ttf"),
    Poppins_500Medium: require("@expo-google-fonts/poppins/Poppins-Medium.ttf"),
    Poppins_400Regular: require("@expo-google-fonts/poppins/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
