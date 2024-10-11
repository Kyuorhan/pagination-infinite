import {
  Dimensions,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import Constants from "expo-constants";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, fontSize } from "@/theme";

const { height, width } = Dimensions.get("window");

interface StatusBarContainerProps extends ViewProps {
  namedTitle?: string;
  isDisableBTN?: boolean;
  navigation: NavigationProp<ParamListBase>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export function StatusBarContainer({
  namedTitle,
  isDisableBTN,
  navigation,
  children,
  style,
  textStyle,
  onPress,
}: StatusBarContainerProps) {
  const flattenedStyle = StyleSheet.flatten([
    styles.container,
    style,
    { paddingTop: Constants.statusBarHeight },
  ]);

  const handlePress = () => {
    onPress ? onPress() : navigation && navigation.goBack();
  };

  function getDynamicTextStyle(text: string) {
    return [text.length <= 20 ? styles.title : styles.limitTitle, textStyle];
  }

  return (
    <View style={flattenedStyle}>
      <StatusBar
        animated={true}
        backgroundColor={"transparent"}
        barStyle={"default"}
        translucent={true}
      />
      <View style={[styles.button, { paddingRight: "3.5%" }]}>
        {isDisableBTN || (
          <TouchableOpacity style={styles.btnLeft} onPress={handlePress}>
            <MaterialIcons
              name="arrow-back-ios-new"
              size={fontSize.xl4}
              color={colors.base.gray200}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContainer}>
          {typeof namedTitle === "string" && (
            <Text style={getDynamicTextStyle(namedTitle)} numberOfLines={2}>
              {namedTitle}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.button}>
        {children && <View style={styles.btnRight}>{children}</View>}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    height: "15%",
    width: "100%",
    backgroundColor: colors.base.gray500,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.0325,
  },
  button: {
    height: "100%",
    width: "18.5%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnLeft: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnRight: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: fontSize.xl3,
    color: colors.base.gray400,
  },
  limitTitle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Poppins_700Bold",
    fontSize: fontSize.xl2_1,
    color: colors.base.gray400,
  },
});
