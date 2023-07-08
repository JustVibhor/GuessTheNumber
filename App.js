import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Heading from "./components/Heading";
import GetInput from "./components/GetInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Heading />
      <GetInput />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ba390e",
  },
});
