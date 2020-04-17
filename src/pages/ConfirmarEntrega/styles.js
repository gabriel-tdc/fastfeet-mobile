import styled from 'styled-components/native';

import { RNCamera } from 'react-native-camera';

import ButtonComp from '~/components/Button';

export const BtnSnap = styled.TouchableOpacity`
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin: -70px auto 35px;
    padding: 15px;
    z-index: 100;
`;

export const PhotoHolder = styled.View`
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: row;
    height: 400px;
`;

export const ImagePreview = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Camera = styled(RNCamera)`
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Button = styled(ButtonComp)`
    background-color: #7d40e7;
`;
