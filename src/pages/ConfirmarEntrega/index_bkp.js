import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { RNCamera } from 'react-native-camera';

import Container from '~/components/Container';
import Button from '~/components/Button';

import { BtnSnap } from './styles';

const androidCameraPermissionOptions = {
    title: 'Permissão para utilizar a câmera',
    message: 'O aplicativo necessitá de sua permissão para utilizar sua câmera',
    buttonPositive: 'Aceitar',
    buttonNegative: 'Cancelar',
};

export default class ConfirmarEntrega extends Component {
    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);

            // console.tron.log(data.uri);
            alert(data.uri);
        }
    };

    render() {
        return (
            <Container bgTop>
                <RNCamera
                    ref={(camera) => {
                        this.camera = camera;
                    }}
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        height: 400,
                    }}
                    type={RNCamera.Constants.Type.back}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    captureAudio={false}
                    androidCameraPermissionOptions={
                        androidCameraPermissionOptions
                    }
                />
                <BtnSnap onPress={this.takePicture}>
                    <Icon name="camera" size={20} color="#fff" />
                </BtnSnap>

                <Image
                    source={data.uri}
                    style={{
                        width: '100px',
                        height: '100px',
                    }}
                />

                <Button style={{ marginTop: 25 }}>Enviar</Button>
            </Container>
        );
    }
}
