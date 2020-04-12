import React from 'react';

import { Image } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

import logotipo from '~/assets/logotipo.png';

import { Background, Container, Form } from './styles';

export default function SignIn({ navigation }) {
    return (
        <Background>
            <Container>
                <Image source={logotipo} />
                <Form>
                    <Input placeholder="Informe seu ID de cadastro" />
                    <Button onPress={() => navigation.navigate('Dashboard')}>
                        Entrar no sistema
                    </Button>
                </Form>
            </Container>
        </Background>
    );
}
