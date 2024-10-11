import { ActivityIndicator, SafeAreaView, StatusBar } from "react-native";
import styles from "./styles";
import { colors } from "@/theme";

export function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={"transparent"}
        barStyle={"default"}
        translucent={true}
      />

      <ActivityIndicator size={50} color={colors.brand.purple} />
    </SafeAreaView>
  );
}
