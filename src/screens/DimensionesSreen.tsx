import React from 'react';
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';


// const {height, width} = Dimensions.get('window')

export const DimensionesSreen = () => {

   const {width, height} = useWindowDimensions()
  return (
    <View>
        <View style={styles.container}>
            <View style={styles.boxOranges}/>
            <View style={styles.boxPurple}/>
        </View>
        <Text style={styles.title}> W:{width}, H:{height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 500,
        backgroundColor: "red",
        borderWidth: 3,
    },
    boxPurple: {
        backgroundColor: '#5856d6',
        width: "50%",
        height: "50%",
    },
    boxOranges: {
        backgroundColor: '#f0a23b',
        width: "50%",
        height: "50%",
    },
    title: {
        fontSize: 30,
    }
});