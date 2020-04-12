import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Container from '~/components/Container';
import Button from '~/components/Button';

import { Avatar, Label, Value } from './styles';

export default function Perfil({ navigation }) {
    return (
        <Container>
            <Avatar
                source={{
                    uri:
                        'https://ui-avatars.com/api/?name=Gaspar Antunes&size=168',
                }}
            />

            <Label>Nome Completo</Label>
            <Value>Gaspar Antunes</Value>

            <Label>E-mail</Label>
            <Value>example@rocketseat.com.br</Value>

            <Label>Data de cadastro</Label>
            <Value>10/01/2020</Value>

            <Button
                style={{ backgroundColor: '#E74040', marginTop: 15 }}
                onPress={() => navigation.navigate('SignIn')}
            >
                Logout
            </Button>
        </Container>
    );
}

Perfil.navigationOptions = {
    // headerShown: false,
    tabBarLabel: 'Meu Perfil',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="user-circle" size={20} color={tintColor} />
    ),
};
