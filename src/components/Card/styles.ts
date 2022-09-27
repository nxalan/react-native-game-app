import { StyleSheet } from "react-native";
import { colors } from "@/utils"

export const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
})