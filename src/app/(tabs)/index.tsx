import theme from "@/src/theme";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.dark.colors.secondary,
      }}
    >
      <Text
        style={{
          fontFamily: theme.dark.fontFamily.bold,
          color: theme.dark.colors.white.one,
        }}
      >
        Home
      </Text>
    </View>
  );
}
