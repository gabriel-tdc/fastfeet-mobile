import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Loading from '~/components/Loading';
import Box from '~/components/Box';
import Container from '~/components/Container';

import {
    BoxHeader,
    BoxTitle,
    SubTitle,
    Text,
    ButtonBox,
    Item,
    IconText,
    BtnIcon,
} from './styles';

export default function Detalhes({ navigation }) {
    const { id } = navigation.state.params;

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [delivery, setDelivery] = useState([]);

    useEffect(() => {
        async function loadDelivery() {
            const response = await api.get(`delivery/${id}`);

            setDelivery(response.data);
            setLoading(false);
        }

        loadDelivery();
    }, []);

    function navigate(route, id) {
        navigation.navigate(route, {
            id,
        });
    }

    let status = '';
    if (delivery.canceled_at) {
        status = 'Cancelado';
    } else if (delivery.end_date) {
        status = 'Entregue';
    } else if (delivery.start_date) {
        status = 'Retirada';
    } else {
        status = 'Aguardando Retirada';
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Container bgTop>
                    <Box>
                        <BoxHeader>
                            <Icon name="truck" size={20} color="#7D40E7" />
                            <BoxTitle>Informações da Entrega</BoxTitle>
                        </BoxHeader>
                        <SubTitle>DESTINATÁRIO</SubTitle>
                        <Text>{delivery.recipients.name}</Text>

                        <SubTitle>ENDEREÇO DE ENTREGA</SubTitle>
                        <Text>
                            {delivery.recipients.street},{' '}
                            {delivery.recipients.number},{' '}
                            {delivery.recipients.city} -{' '}
                            {delivery.recipients.state},{' '}
                            {delivery.recipients.cep}
                        </Text>

                        <SubTitle>PRODUTO</SubTitle>
                        <Text>{delivery.product}</Text>
                    </Box>
                    <Box>
                        <BoxHeader>
                            <Icon
                                name="calendar-alt"
                                size={20}
                                color="#7D40E7"
                            />
                            <BoxTitle>Situação da entrega</BoxTitle>
                        </BoxHeader>
                        <SubTitle>STATUS</SubTitle>
                        <Text>{status}</Text>

                        <SubTitle>DATA DE RETIRADA</SubTitle>
                        <Text>
                            {delivery.start_date
                                ? format(
                                      new Date(delivery.start_date),
                                      "dd'/'MM'/'yyyy",
                                      {
                                          locale: pt,
                                      }
                                  )
                                : '--/--/--'}
                        </Text>

                        <SubTitle>DATA DE ENTREGA</SubTitle>
                        <Text>
                            {delivery.start_date
                                ? format(
                                      new Date(delivery.end_date),
                                      "dd'/'MM'/'yyyy",
                                      {
                                          locale: pt,
                                      }
                                  )
                                : '--/--/--'}
                        </Text>
                    </Box>

                    <ButtonBox>
                        <Item
                            onPress={() =>
                                navigation.navigate('InformarProblema', {
                                    id,
                                    product: delivery.product,
                                })
                            }
                        >
                            <BtnIcon name="times" size={15} color="#E74040" />
                            <IconText>Informar Problema</IconText>
                        </Item>
                        <Item
                            onPress={() =>
                                navigation.navigate('VisualizarProblemas', {
                                    id,
                                    product: delivery.product,
                                })
                            }
                        >
                            <BtnIcon name="info" size={15} color="#E7BA40" />
                            <IconText>Visualizar Problemas</IconText>
                        </Item>
                        <Item
                            onPress={() =>
                                navigation.navigate('ConfirmarEntrega')
                            }
                        >
                            <BtnIcon name="check" size={15} color="#7D40E7" />
                            <IconText>Confirmar Entrega</IconText>
                        </Item>
                    </ButtonBox>
                </Container>
            )}
        </>
    );
}

Detalhes.navigationOptions = {
    title: 'Detalhes da encomenda',
};
