import React, { useState } from 'react';

import { Alert, Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import Input from '~/components/Input';
import Button from '~/components/Button';

import logotipo from '~/assets/logotipo.png';

import { Background, Container, Form } from './styles';

export default function SignIn() {
    const [id, setId] = useState('');

    const loading = useSelector((state) => state.auth.loading);

    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(signInRequest(id));
    }

    return (
        <Background>
            <Container>
                <Image source={logotipo} />
                <Form>
                    <Input
                        placeholder="Informe seu ID de cadastro"
                        value={id}
                        onChangeText={setId}
                    />
                    <Button loading={loading} onPress={() => handleSubmit()}>
                        Entrar no sistema
                    </Button>
                </Form>
            </Container>
        </Background>
    );
}
