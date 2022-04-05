import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Position = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>        
        <View style={styles.cajaNaranja}/>        

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9'
    },
    cajaMorada: {
        position: 'absolute',
        right: 0,
        width: 100,
        height: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white'
    },
    cajaNaranja: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 100,
        height: 100,
        backgroundColor: '#f0a23b',
        borderWidth: 10,
        borderColor: 'white'
    },
})