import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    Container,
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

export default function Delivery({ data }) {
    return (
        <Container>
            <DeliveryHeader>
                <Icon name="truck" color="#7D40E7" size={22} />
                <DeliveryTitle>Encomenda {data.id}</DeliveryTitle>
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
                    <Value>
                        {format(new Date(data.updatedAt), "dd'/'MM'/'yyyy", {
                            locale: pt,
                        })}
                    </Value>
                </View>
                <View>
                    <Label>Cidade</Label>
                    <Value>{data.recipients.city}</Value>
                </View>
                <TouchableOpacity>
                    <DetailsLink>Ver detalhes</DetailsLink>
                </TouchableOpacity>
            </DeliveryFooter>
        </Container>
    );
}
