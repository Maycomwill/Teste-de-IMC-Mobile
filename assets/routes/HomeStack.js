import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import TelaInicial from '../TelaInicial/index';
import TelaCalculos from '../TelaCalculos/index';

const Screens = {
    Home: {
        screen: TelaInicial
    },
    Dados: {
        screen: TelaCalculos
    },
}

const HomeStack = createStackNavigator({ Screens })

export default createAppContainer(HomeStack);