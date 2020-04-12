import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.ScrollView`
    flex: 1;
    padding: 15px;
`;

export const Avatar = styled(Image)`
    width: 168px;
    height: 168px;
    border-radius: 134px;
    margin: 0 auto;
    margin-bottom: 40px;
`;

export const Label = styled.Text`
    font-size: 12px;
    color: #666;
`;

export const Value = styled.Text`
    font-size: 22px;
    margin-bottom: 15px;
    color: #444;
`;
