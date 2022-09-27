import { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import { styles } from "./styles";

type Props = {
  children: ReactNode;
  style?: TextStyle;
}

function InstructionText({ children, style }: Props) {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

export default InstructionText;