import { Image } from 'react-native';

import styled from 'styled-components/native';

import BoxComp from '~/components/Box';

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

export const SubTitle = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: #444444;
`;

export const FilterTitle = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const Filters = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const ButtonFilter = styled.Text`
    font-size: 14px;
    margin-left: 10px;
    color: ${(props) => (props.active ? '#7d40e7' : '#999999')};
`;

export const Box = styled(BoxComp)`
    margin-top: 15px;
`;
