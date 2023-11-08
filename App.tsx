import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductWrapper from './Components/ProductWrapper';
import UserList from './Components/UserList';
const App = () => {
 const Stack =createNativeStackNavigator();
 
  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={ProductWrapper}
        
     
      />
       <Stack.Screen
        name="User"
        component={UserList}
        
     
      />
    
    </Stack.Navigator>
  </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})