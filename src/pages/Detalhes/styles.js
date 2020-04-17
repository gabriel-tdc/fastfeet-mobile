import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.ScrollView`
    padding: 20px;
`;

export const BoxHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const BoxTitle = styled.Text`
    font-size: 18px;
    color: #7d40e7;
    font-weight: bold;
    margin-left: 5px;
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    color: #999999;
    margin: 5px 0;
`;

export const Text = styled.Text`
    color: #666666;
    font-size: 14px;
    margin-bottom: 10px;
`;

export const ButtonBox = styled.View`
    background: #f8f9fd;
    border-radius: 4px;
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 30px;
`;

export const Item = styled.TouchableOpacity`
    width: 33.3%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid #ddd;
    padding: 14px;
`;

export const IconText = styled.Text`
    text-align: center;
    color: #999999;
`;

export const BtnIcon = styled(Icon)`
    border: 2px solid ${(props) => props.color};
    border-radius: 50px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 20px;
`;
