import React from 'react'
import { View, Text } from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <Text style={{
          fontSize: 50,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'black'
        }}>
          Hola Mundo desde React Native!!
          Sensei
        </Text>
      </View>
  )
}
