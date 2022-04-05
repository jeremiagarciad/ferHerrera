import React from 'react'
import { SafeAreaView } from 'react-native'
import { TaskScreen } from './src/screens/TaskScreen'
// import { FlexScreen } from './src/screens/FlexScreen'
// import { Position } from './src/screens/Position'
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen'
// import { DimensionesSreen } from './src/screens/DimensionesSreen'
// import ContadorScreen from './src/screens/ContadorScreen'
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen'


export const App = () => {
  return (
    <SafeAreaView  style={{flex: 1}}>
      <TaskScreen/>
      {/* <FlexScreen/> */}
      {/* <Position/> */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* //  <HolaMundoScreen/> */}
      {/* <DimensionesSreen/> */}
    </SafeAreaView >
  )
}

