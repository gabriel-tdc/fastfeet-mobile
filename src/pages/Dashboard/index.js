import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

import Loading from '~/components/Loading';
import Container from '~/components/Container';
import Delivery from '~/components/Delivery';

import {
    Header,
    Avatar,
    TextTop,
    Welcome,
    Title,
    FilterTitle,
    Filters,
    ButtonFilter,
} from './styles';

export default function Dashboard({ navigation }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [filterEntregues, setFilterEntregues] = useState(false);
    const [deliveries, setDeliveries] = useState([]);

    const { id, name } = useSelector((state) => state.auth.user);
    const avatar = useSelector((state) =>
        state.auth.user.avatar ? state.auth.user.avatar.path : false
    );

    function handleLogout() {
        dispatch(signOut());
    }

    function handleFilter(param) {
        setLoading(true);
        setFilterEntregues(param);
    }

    function navigate(route, id) {
        navigation.navigate(route, {
            id,
        });
    }

    useEffect(() => {
        async function loadDeliveries() {
            const response = await api.get(`deliveryman/${id}/deliveries`, {
                params: {
                    delivered: filterEntregues,
                },
            });

            setDeliveries(response.data);
            setLoading(false);
        }

        loadDeliveries();
    }, [filterEntregues]);

    return (
        <>
            <Container>
                <Header>
                    <Avatar
                        source={{
                            uri: avatar
                                ? `http://192.168.1.104:3333/files/${avatar}`
                                : `https://ui-avatars.com/api/?name=${name}`,
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

                <FilterTitle>
                    <Title>Entregas</Title>
                    <Filters>
                        <TouchableOpacity onPress={() => handleFilter(false)}>
                            <ButtonFilter active={!filterEntregues}>
                                Pendentes
                            </ButtonFilter>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleFilter(true)}>
                            <ButtonFilter active={filterEntregues}>
                                Entregues
                            </ButtonFilter>
                        </TouchableOpacity>
                    </Filters>
                </FilterTitle>
                {loading ? (
                    <Loading />
                ) : (
                    <FlatList
                        data={deliveries}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Delivery
                                data={item}
                                onPress={() => navigate('Detalhes', item.id)}
                            />
                        )}
                    />
                )}
            </Container>
        </>
    );
}

Dashboard.navigationOptions = {
    headerShown: false,
    tabBarLabel: 'Entregaas',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="align-justify" size={20} color={tintColor} />
    ),
};
