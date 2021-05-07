import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/componets/HomePage/HomePage'
import Details from './src/componets/Details/Details';
import { color } from 'react-native-reanimated';


const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomePage' options={{ headerShown: false }} component={HomePage} />
        <Stack.Screen name='Details' options={{ headerStyle: { backgroundColor: '#222831' }, headerTintColor: '#eee', headerTitle:'Detalhes' }} component={Details} />
      </Stack.Navigator>
      <StatusBar backgroundColor='#222831' />
    </NavigationContainer>
  )
}

export default App