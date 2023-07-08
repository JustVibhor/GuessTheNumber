import { StyleSheet, View, Text } from "react-native";

function Heading() {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingText}>Guess My Number</Text>
    </View>
  );
}

export default Heading;

const styles = new StyleSheet.create({
  heading: {
    marginTop: 200,
    marginBottom: 10,
    marginLeft: "18%",
    padding: 15,
    borderColor: "white",
    borderWidth: 2,
    width: 220,
    alignContent: "center",
  },
  headingText: {
    fontSize: 20,
    color: "white",
    fontWeight: "900",
  },
});
