import { Title } from "@/components";
import { View, Text } from "react-native";
import styles from './GameScreen-styles';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
        +
        -
      </View>
      <View>LOG ROUNDS</View>
    </View>
  )
}

export default GameScreen;