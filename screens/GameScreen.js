import { StyleSheet, View, Text } from "react-native";

function GameScreen() {
  return (
    <View style={styles.gameScreen}>
      <Text style={styles.gameScreenText}>Opponent's Guess</Text>
    </View>
  );
}

export default GameScreen;

const styles = new StyleSheet.create({
  gameScreen: {
    alignItems: "center",
  },

  gameScreenText: {
    fontSize: 20,
  },
});
