import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';


interface Props {
    title: string;
    onPress: () => void;
    position?: "br" | "bl";
}
export const Fab = ({title, onPress, position = "br"}: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
            onPress={onPress}
            activeOpacity={ 0.8}
            style={
                (position === "bl")
                  ? styles.buttonRB
                  : styles.buttonLB
            }
            >
                <View style={styles.buttonContainer}>
                  <Text style={styles.text}>{ title }</Text>
                </View>
            </TouchableOpacity>
          )
    }

    const android = () => {
        return (
            <View
            style={
                (position === "bl")
                  ? styles.buttonRB
                  : styles.buttonLB
            }
            >
              <TouchableNativeFeedback
              onPress={onPress}
              background={ TouchableNativeFeedback.Ripple("#28425B", false, 30)}
              >
                <View style={styles.buttonContainer}>
                  <Text style={styles.text}>{ title }</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          )
    }
  return (Platform.OS === 'ios') ? ios() : android()
}

const styles = StyleSheet.create({
    buttonRB: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        padding: 10,
    },

    buttonLB: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 10,
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
    },
    buttonContainer: {
        justifyContent: 'center',
        backgroundColor: '#5856d6',
        width: 60,
        height: 60,
        borderRadius: 100,
        shadowOffset: {
            width: 0,
            height: 4,

        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
})