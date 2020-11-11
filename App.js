import React from 'react';
import TelaInicial from './assets/TelaInicial/index'
import TelaCalculos from './assets/TelaCalculos/index'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Teste de IMC" component={TelaInicial} />
        <Stack.Screen name="Calculos" component={TelaCalculos} />
      </Stack.Navigator>
    );
  }


/*const Tab = createBottomTabNavigator();
  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TelaInicial} />
        <Tab.Screen name="Calculos" component={TelaCalculos} />
      </Tab.Navigator>
    );
  }*/


// ==============================================================================
// ==============================================================================
// ==============================================================================

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


/*export default function App() {
  return (
      <TelaInicial />
  );
}*/