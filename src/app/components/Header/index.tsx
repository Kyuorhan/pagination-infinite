import {
  View,
  StyleSheet,
  ViewProps,
  StyleProp,
  TextStyle,
  StatusBar,
  Text,
} from "react-native";
import Constants from "expo-constants";
import styles from "./styles";

interface HeaderProps extends ViewProps {
  namedTitle: string;
  textStyle?: StyleProp<TextStyle>;
}

export default function Header({ namedTitle, textStyle, style }: HeaderProps) {
  const flattenedStyle = StyleSheet.flatten([
    styles.container,
    style,
    { paddingTop: Constants.statusBarHeight },
  ]);

  function dynamicTextStyle(text: string) {
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
      <View style={styles.textContainer}>
        {typeof namedTitle === "string" && (
          <Text style={dynamicTextStyle(namedTitle)} numberOfLines={2}>
            {namedTitle}
          </Text>
        )}
      </View>
    </View>
  );
}
