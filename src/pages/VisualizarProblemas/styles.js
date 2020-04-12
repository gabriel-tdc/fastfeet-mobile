import styled from 'styled-components/native';
import ComponentBox from '~/components/Box';

export const Title = styled.Text`
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Message = styled.Text`
    color: #999999;
    font-size: 16px;
`;

export const Data = styled.Text`
    color: #c1c1c1;
    font-size: 12px;
`;

export const Box = styled(ComponentBox)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
