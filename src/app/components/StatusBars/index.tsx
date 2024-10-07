import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import theme from "@/theme";

const { height, width } = Dimensions.get("window");

interface StatusBarContainerProps extends ViewProps {
  namedTitle?: string;
  isDisableBTN?: boolean;
  navigation: NavigationProp<ParamListBase>;
  onPress?: () => void;
}

export function StatusBarContainer({
  namedTitle,
  isDisableBTN,
  navigation,
  children,
  style,
  onPress,
}: StatusBarContainerProps) {
  const flattenedStyle = StyleSheet.flatten([styles.container, style]);

  const handlePress = () => {
    onPress ? onPress() : navigation && navigation.goBack();
  };

  function getDynamicTextStyle(text: string) {
    return text.length <= 20 ? styles.title : styles.limitTitle;
  }

  return (
    <View style={flattenedStyle}>
      <View style={[styles.button, { paddingRight: "3.5%" }]}>
        {isDisableBTN || (
          <TouchableOpacity style={styles.btnLeft} onPress={handlePress}>
            <MaterialIcons
              size={styles.arrowLeft.height}
              color={styles.arrowLeft.color}
            />
          </TouchableOpacity>
        )}
        {/* {isDisableBTN || <ArrowLeftBlue onPress={handlePress} />} */}
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
    width: "100%",
    height: height * 0.085,
    marginTop: height * 0.015,
    marginBottom: height * 0.0075,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.0285,
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
  arrowLeft: {
    height: height * 0.0285,
    color: theme.colors.base.gray400,
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
    fontFamily: "Sans-Bold",
    fontSize: height * 0.025,
    color: theme.colors.base.gray400,
  },
  limitTitle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Sans-Bold",
    fontSize: height * 0.021,
    color: theme.colors.base.gray400,
  },
});
