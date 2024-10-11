import { Platform, StatusBar, StyleSheet, View, ViewProps } from "react-native";

const statusBarHeight = Platform.OS === "ios" ? 0 : StatusBar.currentHeight;

export function BaseContainer({ children, style }: ViewProps) {
  const baseStyle = {
    flex: 1,
    paddingTop: statusBarHeight,
  };
  const flattenedStyle = StyleSheet.flatten([baseStyle, style]);
  return (
    <View style={flattenedStyle}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {children}
    </View>
  );
}
