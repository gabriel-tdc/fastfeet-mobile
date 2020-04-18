import styled from 'styled-components/native';
import ComponentBox from '~/components/Box';

export const Title = styled.Text`
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Message = styled.Text.attrs({
    // numberOfLines: 1,
})`
    color: #999999;
    font-size: 16px;
    max-width: 200px;
`;

export const Data = styled.Text`
    color: #c1c1c1;
    font-size: 12px;
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    color: #444444;
    text-align: center;
    flex: 1;
`;

export const Box = styled(ComponentBox)`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;
