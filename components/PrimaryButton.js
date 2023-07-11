import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = new StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 10,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
