// Snippets para crear un components de react-native (rfn)

import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { Fab } from '../components/Fab';

export default function ContadorScreen() {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>
          Contador: {contador}
      </Text>
      <Fab
        title='+1'
        onPress={() => setContador(contador + 1)}
      />

    <Fab
        title='-1'
        onPress={() => setContador(contador - 1)}
        position="bl"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
},
buttonRB: {
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
textCenter: {
    alignSelf: 'center',
    borderWidth: 4,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#5F89EB",
    backgroundColor: "#61dafb",
    borderRadius: 6,
    fontSize: 40,
    textAlign: 'center',
},
buttonContainer: {
    justifyContent: 'center',
    // backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
},
});
