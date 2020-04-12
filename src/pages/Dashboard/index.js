import React, { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

import Container from '~/components/Container';
import Delivery from '~/components/Delivery';

import { Header, Avatar, TextTop, Welcome, Title } from './styles';

export default function Dashboard() {
    const dispatch = useDispatch();
    const [deliveries, setDeliveries] = useState([]);

    const { id, name } = useSelector((state) => state.auth.user);
    const avatar = useSelector((state) =>
        state.auth.user.avatar ? state.auth.user.avatar.path : false
    );

    function handleLogout() {
        dispatch(signOut());
    }

    useEffect(() => {
        async function loadDeliveries() {
            const response = await api.get(`deliveryman/${id}/deliveries`);

            setDeliveries(response.data);
        }

        loadDeliveries();
    }, []);

    return (
        <Container>
            <Header>
                <Avatar
                    source={{
                        uri: avatar
                            ? `http://192.168.1.104:3333/files/${avatar}`
                            : 'https://ui-avatars.com/api/?name=N',
                    }}
                />
                <TextTop>
                    <Welcome>Bem vindo de volta,</Welcome>
                    <Title>{name}</Title>
                </TextTop>
                <TouchableOpacity onPress={() => handleLogout()}>
                    <Icon name="sign-out-alt" color="#E74040" size={20} />
                </TouchableOpacity>
            </Header>

            <Title>Entregas</Title>

            <FlatList
                data={deliveries}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Delivery data={item} />}
            />
        </Container>
    );
}

Dashboard.navigationOptions = {
    headerShown: false,
    tabBarLabel: 'Entregaas',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="align-justify" size={20} color={tintColor} />
    ),
};
