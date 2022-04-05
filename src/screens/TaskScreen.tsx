import { View, Text, StyleSheet } from 'react-native';
import React from 'react'

export const TaskScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada}/>
      <View style={styles.cajaNaranja}/>
      <View style={styles.cajaAzul}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#284258",
    },
    cajaMorada: {
        // position: "absolute",
        // flex: 1,
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor: "#ffffff",
        backgroundColor: "#5856d6",
        // bottom: -100,
    },
    cajaNaranja: {
        // flex: 1,
        bottom: -100,
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor: "#ffffff",
        backgroundColor: "#f0a238"
    },
    cajaAzul: {
        // flex: 2,
        // maxwidth: 50,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "#ffffff",
        backgroundColor: "#28c4d9"
    }
});