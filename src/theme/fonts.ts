import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const fontFamily = {
  Inter_900Black: require("../../assets/fonts/Inter_900Black.ttf"),
  Inter_800ExtraBold: require("../../assets/fonts/Inter_800ExtraBold.ttf"),
  Inter_700Bold: require("../../assets/fonts/Inter_700Bold.ttf"),
  Inter_600SemiBold: require("../../assets/fonts/Inter_600SemiBold.ttf"),
  Inter_500Medium: require("../../assets/fonts/Inter_500Medium.ttf"),
  Inter_400Regular: require("../../assets/fonts/Inter_400Regular.ttf"),
  Poppins_700Bold: require("../../assets/fonts/Poppins_700Bold.ttf"),
  Poppins_600SemiBold: require("../../assets/fonts/Poppins_600SemiBold.ttf"),
  Poppins_500Medium: require("../../assets/fonts/Poppins_500Medium.ttf"),
  Poppins_400Regular: require("../../assets/fonts/Poppins_400Regular.ttf"),
} as const;

export const fontSize = {
  xs: height * 0.012,
  sm: height * 0.014,
  lg: height * 0.016,
  xl: height * 0.018,
  xl2: height * 0.02,
  xl2_1: height * 0.022,
  xl3: height * 0.024,
  xl3_1: height * 0.026,
  xl4: height * 0.03,
  xl4_1: height * 0.032,
  xl5: height * 0.036,
};
