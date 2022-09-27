import { useState, useEffect } from 'react';
import { View, Alert } from "react-native";
import { Card, InstructionText, NumberContainer, PrimaryButton, Title } from "@/components";
import { Ionicons } from '@expo/vector-icons';
import { colors, generateRandomBetween } from '@/utils';
import styles from './styles';

type Props = {
  userNumber: number;
  onGameOver: () => void
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }: Props) {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userNumber));

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
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
    setCurrentGuess(generateRandomBetween(minBoundary, maxBoundary, currentGuess));
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
    </View>
  )
}

export default GameScreen;