import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModelScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  title: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    fontSize: 20,
    marginHorizontal: 20,
    borderWidth: 10
    // backgroundColor: 'red'
  }
});