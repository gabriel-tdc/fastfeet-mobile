import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

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

export default function Delivery({ data, onPress }) {
    return (
        <Container>
            <DeliveryHeader>
                <Icon name="truck" color="#7D40E7" size={22} />
                <View>
                    <DeliveryTitle>{data.product}</DeliveryTitle>
                </View>
            </DeliveryHeader>
            <Status>
                <StatusBar>
                    <Item active />
                    <Item active={!!data.start_date} />
                    <Item active={!!data.end_date} />
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
                <TouchableOpacity onPress={onPress}>
                    <DetailsLink>Ver detalhes</DetailsLink>
                </TouchableOpacity>
            </DeliveryFooter>
        </Container>
    );
}

Delivery.propTypes = {
    data: PropTypes.shape({
        product: PropTypes.string,
        start_date: PropTypes.string,
        updatedAt: PropTypes.string,
        end_date: PropTypes.string,
        recipients: PropTypes.shape({
            city: PropTypes.string,
        }),
    }).isRequired,
};
