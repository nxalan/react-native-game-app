import { StyleSheet } from "react-native";
import { colors } from "@/utils"

export const styles = StyleSheet.create({
  container: {
    borderWith: 4,
    borderColor: colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justiftContent: 'center'
  },
  numberText: {
    color: colors.accent500,
    fontSize: 36,
    fontFamily: 'OpenSansBold'
  }
});