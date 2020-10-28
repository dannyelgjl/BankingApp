import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import TouchScreen from '././src/screens/TouchScreen';
import PinScreen from '././src/screens/PinScreen';

const Stack = createStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="TouchScreen" component={TouchScreen}/>
        <Stack.Screen name="PinScreen" component={PinScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

