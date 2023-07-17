import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width } = useWindowDimensions();

  let imageSize = 300;

  if (width > 500) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    margin: 18,
  };

  let content = (
    <>
      <ScrollView style={styles.screen}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.summaryHighlight}>{roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.summaryHighlight}>{userNumber}</Text> .
        </Text>
        <PrimaryButton style={styles.button} onPress={onStartNewGame}>
          Start New Game
        </PrimaryButton>
      </ScrollView>
    </>
  );

  return <View style={styles.rootContainer}>{content}</View>;
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: deviceWidth < 380 ? 250 : 300,
    height: deviceWidth < 380 ? 250 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },

  summaryHighlight: {
    fontFamily: "open-sans-bold",
    color: "white",
  },

  button: {
    width: "50%",
    height: "50%",
  },
});
