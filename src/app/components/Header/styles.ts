import { colors, fontSize } from "@/theme";
import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: "12.5%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingHorizontal: height * 0.02,
  },
  title: {
    textAlign: "left",
    fontFamily: "Inter_600SemiBold",
    fontSize: fontSize.xl4,
    color: colors.base.gray100,
  },
  limitTitle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Poppins_700Bold",
    fontSize: fontSize.xl3,
    color: colors.base.gray400,
  },
  textContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default styles;
