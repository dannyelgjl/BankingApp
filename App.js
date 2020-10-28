import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import TouchScreen from '././src/screens/TouchScreen';

const Stack = createStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="TouchScreen" component={TouchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

