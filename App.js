import React from 'react';
import TelaInicial from './assets/TelaInicial/index';
import TelaCalculos from './assets/TelaCalculos/index';
import TelaResultados from './assets/TelaResultados/index';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: "#f3cbcb"},
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: "bold"
      }}>
        <Stack.Screen 
          name="Home"
          component={TelaInicial} />
        <Stack.Screen
          name="Calculos"
          component={TelaCalculos} />
        <Stack.Screen
          name="Resultados"
          component={TelaResultados} />
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