import { ReactNode } from 'react';
import { View, Text, Pressable } from 'react-native';
import { colors } from '@/utils';
import styles from './PrimaryButton-styles';

type Props = {
  children: ReactNode;
  onPress?: () => void;
}

function PrimaryButton({ children, onPress }: Props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;