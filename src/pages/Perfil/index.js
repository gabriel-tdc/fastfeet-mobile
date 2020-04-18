import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { signOut } from '~/store/modules/auth/actions';

import Container from '~/components/Container';
import Button from '~/components/Button';

import { Avatar, Label, Value } from './styles';

export default function Perfil() {
    const dispatch = useDispatch();

    const { name, email, created_at } = useSelector((state) => state.auth.user);
    const avatar = useSelector((state) =>
        state.auth.user.avatar ? state.auth.user.avatar.path : false
    );

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Avatar
                source={{
                    uri: avatar
                        ? `http://192.168.1.104:3333/files/${avatar}`
                        : `https://ui-avatars.com/api/?name=${name}`,
                }}
            />

            <Label>Nome Completo</Label>
            <Value>{name}</Value>

            <Label>E-mail</Label>
            <Value>{email}</Value>

            <Label>Data de cadastro</Label>
            <Value>
                {created_at
                    ? format(new Date(created_at), "dd'/'MM'/'yyyy", {
                          locale: pt,
                      })
                    : '--/--/--'}
            </Value>

            <Button
                style={{ backgroundColor: '#E74040', marginTop: 15 }}
                onPress={() => handleLogout()}
            >
                Logout
            </Button>
        </Container>
    );
}

Perfil.navigationOptions = {
    headerShown: false,
};
