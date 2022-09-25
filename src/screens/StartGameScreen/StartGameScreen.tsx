import { useState } from 'react';
import { TextInput, View, Alert } from "react-native";
import { PrimaryButton } from "@/components";
import styles from './StartGameScreen-styles';

type Props = {
  onPickNumber: (pickedNumber: number) => void
}

function StartGameScreen({ onPickNumber }: Props) {
  const [enteredNumber, setEnteredNumber] = useState<string>('');

  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('')
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
    } else {
      onPickNumber(1);
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen;