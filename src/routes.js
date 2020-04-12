import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';
import Detalhes from './pages/Detalhes';

import Perfil from './pages/Perfil';
import InformarProblema from './pages/InformarProblema';
import VisualizarProblemas from './pages/VisualizarProblemas';

const Routes = createAppContainer(
    createSwitchNavigator({
        SignIn: createSwitchNavigator({
            SignIn,
        }),
        App: createBottomTabNavigator(
            {
                Entregas: createStackNavigator(
                    {
                        Dashboard,
                        Detalhes,
                        InformarProblema,
                        VisualizarProblemas,
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
                ),
                Perfil,
            },
            {
                tabBarOptions: {
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
    })
);

export default Routes;
