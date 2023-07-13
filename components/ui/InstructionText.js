import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{content}</Text>;
}

export default InstructionText;

const styles = new StyleSheet.create({
  instructionText: {
    fontSize: 25,
    color: Colors.accent500,
  },
});
