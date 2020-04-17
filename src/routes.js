/* eslint-disable react/prop-types */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';
import Detalhes from './pages/Detalhes';

import Perfil from './pages/Perfil';
import InformarProblema from './pages/InformarProblema';
import VisualizarProblemas from './pages/VisualizarProblemas';
import ConfirmarEntrega from './pages/ConfirmarEntrega';

const EntregasStack = createStackNavigator(
    {
        Dashboard,
        Detalhes,
        InformarProblema,
        VisualizarProblemas,
        ConfirmarEntrega,
    },
    {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#7D40E7',
            },
            headerTintColor: '#fff',
        },
    }
);

EntregasStack.navigationOptions = {
    title: 'Entregas',
    header: null,
    tabBarIcon: ({ tintColor }) => (
        <Icon name="align-justify" size={20} color={tintColor} />
    ),
};

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                SignIn: createSwitchNavigator({
                    SignIn,
                }),
                App: createBottomTabNavigator(
                    {
                        Dashboard: { screen: EntregasStack },
                        Perfil,
                    },
                    {
                        tabBarOptions: {
                            showIcon: true,
                            keyboardHidesTabBar: true,
                            activeTintColor: '#7D40E7',
                            inactiveTintColor: '#999999',
                            style: {
                                borderTopColor: '#DDD',
                                backgroundColor: '#FFF',
                                color: '#ff0',
                            },
                        },
                    }
                ),
            },
            {
                initialRouteName: signedIn ? 'App' : 'SignIn',
            }
        )
    );
