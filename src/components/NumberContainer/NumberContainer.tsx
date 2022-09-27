import { ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from './styles';

type Props = {
  children: ReactNode;
}

function NumberContainer({ children }: Props) {
 return(
  <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
  </View>
 )
}

export default NumberContainer;