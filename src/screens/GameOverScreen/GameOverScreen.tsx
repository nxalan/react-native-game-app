import { PrimaryButton, Title } from "@/components";
import { View, Image, Text } from "react-native";
import { styles } from './styles';

type Props = {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }: Props) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to 
        guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>

  )
}

export default GameOverScreen;