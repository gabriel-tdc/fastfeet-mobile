import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

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
    return (
        <Container bgTop>
            <Box>
                <BoxHeader>
                    <Icon name="truck" size={20} color="#7D40E7" />
                    <BoxTitle>Informações da Entrega</BoxTitle>
                </BoxHeader>
                <SubTitle>DESTINATÁRIO</SubTitle>
                <Text>Ludwin van Beethoven</Text>

                <SubTitle>ENDEREÇO DE ENTREGA</SubTitle>
                <Text>Rua Beethoven, 1729, Diadema - SP, 09960-580</Text>

                <SubTitle>PRODUTO</SubTitle>
                <Text>Yamaha SX7</Text>
            </Box>
            <Box>
                <BoxHeader>
                    <Icon name="calendar-alt" size={20} color="#7D40E7" />
                    <BoxTitle>Situação da entrega</BoxTitle>
                </BoxHeader>
                <SubTitle>STATUS</SubTitle>
                <Text>Pendente</Text>

                <SubTitle>DATA DE RETIRADA</SubTitle>
                <Text>14/01/2020</Text>

                <SubTitle>DATA DE ENTREGA</SubTitle>
                <Text>--/--/--</Text>
            </Box>

            <ButtonBox>
                <Item onPress={() => navigation.navigate('InformarProblema')}>
                    <BtnIcon name="times" size={15} color="#E74040" />
                    <IconText>Informar Problema</IconText>
                </Item>
                <Item
                    onPress={() => navigation.navigate('VisualizarProblemas')}
                >
                    <BtnIcon name="info" size={15} color="#E7BA40" />
                    <IconText>Visualizar Problemas</IconText>
                </Item>
                <Item onPress={() => navigation.navigate('ConfirmarEntrega')}>
                    <BtnIcon name="check" size={15} color="#7D40E7" />
                    <IconText>Confirmar Entrega</IconText>
                </Item>
            </ButtonBox>
        </Container>
    );
}

Detalhes.navigationOptions = {
    title: 'Detalhes da encomenda',
};
