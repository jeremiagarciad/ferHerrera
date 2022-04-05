import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box1</Text>
      <Text style={styles.box2}>Box2</Text>
      <Text style={styles.box3}>Box3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
        flex:1,
        backgroundColor: "#28c4d9",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    box1: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "#F08922",
        fontSize: 30,
    },
    box2: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "#781FCA",
        fontSize: 30,
    },
    box3: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "#CA1F6F",
        fontSize: 30,
    }
});