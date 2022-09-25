
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { StartGameScreen, GameScreen } from '@/screens';
import { colors } from '@/utils'

export default function App() {
  const [userNumber, setUserNumber] = useState<number>(0);

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }


  return (
    <LinearGradient
      colors={[colors.primary600, colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {userNumber === 0 && (
            <StartGameScreen onPickNumber={pickedNumberHandler} />
          )}
          {userNumber === 1 && (
            <GameScreen />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
