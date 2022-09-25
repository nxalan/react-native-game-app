import React from 'react'
import { View, Text } from 'react-native'

type Props = {
  children: React.ReactNode;
}

function PrimaryButton({ children }: Props) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default PrimaryButton;