import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import TouchScreen from '././src/screens/TouchScreen';
import PinScreen from '././src/screens/PinScreen';
import Home from '././src/screens/Home';
import CardsScreen from '././src/screens/CardsScreen';
import SendRequestScreen from '././src/screens/SendRequestScreen';


const Stack = createStackNavigator();
const TabStack = createBottomTabNavigator();


const tabBarOptions = {
  showLabel: true,
  style: {
    backgroundColor: '#1e1e1e',
    borderColor: '#1e1e1e',
    
  }
};

/*const screenOption = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let icon = "";
    const color = focused ? "#559dff" : "#828282";
    const size = 24;

    switch (route.name) {
      case "Cards":
        icon = "credit-card";
        break;
      
      default:
        icon = "dashboard";
    }
 
    return <MaterialIcons name={icon} size={size} color={color} />
  }
}); */

const TabStackScreens = () => {
  return (
    <TabStack.Navigator tabBarOptions={tabBarOptions}  >
      <TabStack.Screen  name="Home" component={Home}  options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="dashboard" color={color} size={24} />
        )
      }} />

      <TabStack.Screen  name="SendRequest" component={SendRequestScreen} options={{
        title: "Send & Request",
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="send" color={color} size={24} />
        )
      }} />

      <TabStack.Screen  name="Cards" component={CardsScreen} options={{
        title: "My Cards",
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="credit-card" color={color} size={24} />
        )
      }}/>
    </TabStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
     
        <Stack.Screen name="TouchScreen" component={TouchScreen}/>
        <Stack.Screen name="PinScreen" component={PinScreen}/>
        <Stack.Screen name="Tabs" component={TabStackScreens}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

