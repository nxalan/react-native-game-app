import { StyleSheet } from "react-native";
import { colors } from '@/utils';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: colors.accent500,
    padding: 12
  }
})

export default styles;