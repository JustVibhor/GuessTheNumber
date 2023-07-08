import { Button, Pressable } from "react-native";
import { StyleSheet, TextInput, View, Text } from "react-native";

function GetInput() {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputHeading}>Enter a Number</Text>
      <TextInput style={styles.inputTextContainer} />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text>Reset</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default GetInput;

const styles = new StyleSheet.create({
  inputContainer: {
    // flex: 111,
    marginLeft: 25,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6c051f",
    padding: 10,
    borderRadius: 6,
    width: "80%",
  },

  inputHeading: {
    fontSize: 20,
    marginTop: 10,
    color: "orange",
  },

  inputTextContainer: {
    fontSize: 20,
    width: 150,
    textAlign: "center",
    backgroundColor: "#6c051f",
    textDecorationLine: "underline",
    textDecorationColor: "yellow",
    color: "orange",
    margin: 30,
  },

  buttonContainer: {
    flexDirection: "row",

    justifyContent: "space-between",
  },

  button: {
    borderRadius: 8,
    color: "white",
    backgroundColor: "#d5335b",
    width: 100,
    padding: 10,
    alignItems: "center",
    margin: 5,
  },
});
