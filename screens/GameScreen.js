import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <View>
        <Text>Higher or Lower</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = new StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1232ff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#1232ff",
    padding: 12,
  },
});
