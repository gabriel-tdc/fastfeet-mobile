import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Container from '~/components/Container';

import {
    Header,
    Avatar,
    TextTop,
    Welcome,
    Title,
    Delivery,
    DeliveryHeader,
    DeliveryTitle,
    Status,
    StatusText,
    StatusBar,
    Item,
    DeliveryFooter,
    Label,
    Value,
    DetailsLink,
} from './styles';

export default function Dashboard({ navigation }) {
    return (
        <Container>
            <Header>
                <Avatar
                    source={{
                        uri: 'https://ui-avatars.com/api/?name=Gaspar Antunes',
                    }}
                />
                <TextTop>
                    <Welcome>Bem vindo de volta,</Welcome>
                    <Title>Gaspar Antunes</Title>
                </TextTop>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Icon name="sign-out-alt" color="#E74040" size={20} />
                </TouchableOpacity>
            </Header>

            <Title>Entregas</Title>

            <Delivery>
                <DeliveryHeader>
                    <Icon name="truck" color="#7D40E7" size={22} />
                    <DeliveryTitle>Encomenda 01</DeliveryTitle>
                </DeliveryHeader>
                <Status>
                    <StatusBar>
                        <Item active />
                        <Item active />
                        <Item active={false} />
                    </StatusBar>
                    <StatusText>Aguardando retirada</StatusText>
                    <StatusText>Retirada</StatusText>
                    <StatusText>Entregue</StatusText>
                </Status>
                <DeliveryFooter>
                    <View>
                        <Label>Data</Label>
                        <Value>14/01/2020</Value>
                    </View>
                    <View>
                        <Label>Cidade</Label>
                        <Value>Diadema</Value>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detalhes')}
                    >
                        <DetailsLink>Ver detalhes</DetailsLink>
                    </TouchableOpacity>
                </DeliveryFooter>
            </Delivery>

            <Delivery>
                <DeliveryHeader>
                    <Icon name="truck" color="#7D40E7" size={22} />
                    <DeliveryTitle>Encomenda 02</DeliveryTitle>
                </DeliveryHeader>
                <Status>
                    <StatusBar>
                        <Item active />
                        <Item active={false} />
                        <Item active={false} />
                    </StatusBar>
                    <StatusText>Aguardando retirada</StatusText>
                    <StatusText>Retirada</StatusText>
                    <StatusText>Entregue</StatusText>
                </Status>
                <DeliveryFooter>
                    <View>
                        <Label>Data</Label>
                        <Value>15/01/2020</Value>
                    </View>
                    <View>
                        <Label>Cidade</Label>
                        <Value>Rio do Sul</Value>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detalhes')}
                    >
                        <DetailsLink>Ver detalhes</DetailsLink>
                    </TouchableOpacity>
                </DeliveryFooter>
            </Delivery>

            <Delivery>
                <DeliveryHeader>
                    <Icon name="truck" color="#7D40E7" size={22} />
                    <DeliveryTitle>Encomenda 02</DeliveryTitle>
                </DeliveryHeader>
                <Status>
                    <StatusBar>
                        <Item active />
                        <Item active={false} />
                        <Item active={false} />
                    </StatusBar>
                    <StatusText>Aguardando retirada</StatusText>
                    <StatusText>Retirada</StatusText>
                    <StatusText>Entregue</StatusText>
                </Status>
                <DeliveryFooter>
                    <View>
                        <Label>Data</Label>
                        <Value>15/01/2020</Value>
                    </View>
                    <View>
                        <Label>Cidade</Label>
                        <Value>Rio do Sul</Value>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detalhes')}
                    >
                        <DetailsLink>Ver detalhes</DetailsLink>
                    </TouchableOpacity>
                </DeliveryFooter>
            </Delivery>
        </Container>
    );
}

Dashboard.navigationOptions = {
    headerShown: false,
    tabBarLabel: 'Entregas',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="align-justify" size={20} color={tintColor} />
    ),
};
