import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from './styles'

type Props = {
  children: ReactNode
}

function Card({ children }: Props) {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card;