import { StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "@/components";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: 100,
    padding: 16
  }
});

export default StartGameScreen;