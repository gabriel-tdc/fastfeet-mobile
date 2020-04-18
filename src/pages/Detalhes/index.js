import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import PropTypes from 'prop-types';

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

    async function handleRetirada() {
        try {
            const start_date = format(new Date(), "yyyy-MM-dd'T'hh:mm:ssxxx");
            await api.put(`delivery/${id}/status/`, {
                start_date,
            });

            Alert.alert('Aviso', 'Encomenda marcada como retirada.');

            navigation.navigate('Dashboard');
        } catch (err) {
            Alert.alert(
                'Erro',
                err.response.request._response
                    ? JSON.parse(err.response.request._response).error
                    : 'Ocorreu um erro'
            );
        }
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Container bgTop scroll>
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
                            {delivery.end_date
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
                        {!delivery.end_date && (
                            <Item
                                onPress={() =>
                                    navigation.navigate('InformarProblema', {
                                        id,
                                        product: delivery.product,
                                    })
                                }
                            >
                                <BtnIcon
                                    name="times"
                                    size={15}
                                    color="#E74040"
                                />
                                <IconText>Informar{`\n`}Problemas</IconText>
                            </Item>
                        )}
                        <Item
                            onPress={() =>
                                navigation.navigate('VisualizarProblemas', {
                                    id,
                                    product: delivery.product,
                                })
                            }
                        >
                            <BtnIcon name="info" size={15} color="#E7BA40" />
                            <IconText>Visualizar{`\n`}Problemas</IconText>
                        </Item>
                        {!delivery.end_date && delivery.start_date && (
                            <Item
                                onPress={() =>
                                    navigation.navigate('ConfirmarEntrega', {
                                        id,
                                        product: delivery.product,
                                    })
                                }
                            >
                                <BtnIcon
                                    name="check"
                                    size={15}
                                    color="#7D40E7"
                                />
                                <IconText>Confirmar{`\n`}Entrega</IconText>
                            </Item>
                        )}
                        {!delivery.start_date && (
                            <Item onPress={() => handleRetirada()}>
                                <BtnIcon
                                    name="check"
                                    size={15}
                                    color="#82BF18"
                                />
                                <IconText>Marcar{`\n`}Retirada</IconText>
                            </Item>
                        )}
                    </ButtonBox>
                </Container>
            )}
        </>
    );
}

Detalhes.navigationOptions = {
    title: 'Detalhes da encomenda',
};

Detalhes.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        state: PropTypes.shape({
            params: PropTypes.object.isRequired,
        }),
    }).isRequired,
};
