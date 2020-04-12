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
