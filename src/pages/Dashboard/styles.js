import { Image } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    padding: 20px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 22px;
`;

export const Avatar = styled(Image)`
    width: 68px;
    height: 68px;
    border-radius: 34px;
`;

export const TextTop = styled.View`
    flex-grow: 1;
    justify-content: center;
    margin-left: 12px;
`;

export const Welcome = styled.Text`
    color: #666666;
    font-size: 12px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 22px;
    color: #444444;
`;

// Delivery
export const Delivery = styled.View`
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 18px;
`;

export const DeliveryHeader = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 14px;
`;

export const DeliveryTitle = styled.Text`
    color: #7d40e7;
    font-size: 22px;
    margin-left: 10px;
`;

export const Status = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    padding-top: 20px;
`;

export const StatusText = styled.Text`
    color: #999;
    width: 33.3%;
    text-align: center;
    font-size: 12px;
`;

export const StatusBar = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: #7d40e7;
    height: 1px;
    width: 70%;
    position: absolute;
    top: 10px;
    left: 15.5%;
`;

export const Item = styled.View`
    width: 10px;
    height: 10px;
    background: ${(props) => (props.active ? '#7d40e7' : '#fff')};
    border: 1px solid #7d40e7;
    border-radius: 5px;
    text-align: center;
    margin-top: -8px;
`;

export const DeliveryFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #f8f9fd;
    padding: 14px;
`;

export const Label = styled.Text`
    font-size: 10px;
    color: #999999;
`;

export const Value = styled.Text`
    font-size: 14px;
    color: #444444;
`;

export const DetailsLink = styled.Text`
    color: #7d40e7;
`;
