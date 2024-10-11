import { colors, fontSize } from "@/theme";
import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base.gray600,
  },
  header: {
    height: "15%",
    width: "100%",
    backgroundColor: colors.base.gray500,
    justifyContent: "flex-end",
  },
  headerText: {
    color: colors.brand.purple,
  },
  followerContainer: {
    flex: 1,
    flexDirection: "row",
    padding: height * 0.02,
    gap: height * 0.01,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.base.gray400,
    marginHorizontal: height * 0.02,
  },
  avatar: {
    width: height * 0.0575,
    height: height * 0.0575,
    borderRadius: 100,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    gap: 5,
  },
  name: {
    fontFamily: "Inter_600SemiBold",
    fontSize: fontSize.lg,
    color: colors.base.gray100,
  },
  bio: {
    width: "100%",
    fontFamily: "Inter_400Regular",
    fontSize: fontSize.sm,
    color: colors.base.gray300,
  },
  details: {
    gap: 15,
    marginTop: height * 0.01,
  },
  itemDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7.5,
  },
  company: {
    fontFamily: "Inter_400Regular",
    fontSize: fontSize.sm,
    color: colors.base.gray300,
  },
  location: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: fontSize.sm,
    color: colors.base.gray300,
  },
});

export default styles;
