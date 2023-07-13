import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionsText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionsText: {
    fontFamily: "open-sans",
    fontSize: 25,
    color: Colors.accent500,
  },
});
