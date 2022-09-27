import { useState, useEffect } from 'react';
import { View, Alert, FlatList } from "react-native";
import { Card, GuessLogItem, InstructionText, NumberContainer, PrimaryButton, Title } from "@/components";
import { Ionicons } from '@expo/vector-icons';
import { colors, generateRandomBetween } from '@/utils';
import styles from './styles';

type Props = {
  userNumber: number;
  onGameOver: (numberOfRounds: number) => void
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }: Props) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      minBoundary = 1;
      maxBoundary = 100;
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber])

  function nextGuessHandler(direction: 'lower' | 'greater') {
    if (direction === 'lower' && currentGuess > userNumber) {
      maxBoundary = currentGuess;
    }
    else if (direction === 'greater' && currentGuess < userNumber) {
      minBoundary = currentGuess + 1;
    } else {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: 'Sorry!', style: 'cancel' }
      ])
      return;
    }
    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name="md-add" size={24} color={colors.white} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="md-remove" size={24} color={colors.white} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRounds.length - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  )
}

export default GameScreen;