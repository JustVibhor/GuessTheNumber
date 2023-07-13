import { StyleSheet } from "react-native";

function Card() {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

styles = new StyleSheet.create({
  inputContainer: {},
});
