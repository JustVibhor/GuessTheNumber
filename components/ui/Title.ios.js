import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = new StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 28,
    color: "white",
    textAlign: "center",
    borderWidth: 0,
    borderColor: "black",
    padding: 12,
    maxWidth: "80%",
    width: 300,
    marginTop: "5%",
  },
});
