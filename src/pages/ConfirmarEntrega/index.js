/* global FormData */
/* eslint no-undef: "error" */
import React, { useState, useRef } from 'react';

import PropTypes from 'prop-types';

import { RNCamera } from 'react-native-camera';

import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/FontAwesome5';

import api from '~/services/api';

import Container from '~/components/Container';

import { BtnSnap, PhotoHolder, ImagePreview, Camera, Button } from './styles';

const androidCameraPermissionOptions = {
    title: 'Permissão para utilizar a câmera',
    message: 'O aplicativo necessita de sua permissão para utilizar sua câmera',
    buttonPositive: 'Aceitar',
    buttonNegative: 'Cancelar',
};

export default function ConfirmarEntrega({ navigation }) {
    const { id } = navigation.state.params;
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState('');
    const refCamera = useRef();

    async function takePicture() {
        const camera = refCamera.current;
        if (camera) {
            const options = {
                quality: 1,
                width: 768,
                base64: false,
            };
            const data = await camera.takePictureAsync(options);
            setPreview(data.uri);
        }
    }

    function resetPicture() {
        setPreview('');
    }

    async function handleSubmit() {
        setLoading(true);

        const fileNameAux = preview.split('/');
        const fileName = fileNameAux[fileNameAux.length - 1];
        const data = new FormData();
        data.append('end_date', format(new Date(), "yyyy-MM-dd'T'hh:mm:ssxxx"));

        data.append('file', {
            type: 'image/jpeg',
            uri: preview,
            name: fileName,
        });

        await api.put(`delivery/${id}/status/`, data);

        setLoading(false);

        navigation.navigate('Dashboard');
    }

    return (
        <Container scroll>
            <PhotoHolder>
                {!preview ? (
                    <Camera
                        ref={refCamera}
                        type={RNCamera.Constants.Type.back}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                        flashMode={RNCamera.Constants.FlashMode.off}
                        captureAudio={false}
                        androidCameraPermissionOptions={
                            androidCameraPermissionOptions
                        }
                    />
                ) : (
                    <ImagePreview
                        source={{
                            uri: preview,
                        }}
                    />
                )}
            </PhotoHolder>

            {!preview ? (
                <BtnSnap onPress={takePicture}>
                    <Icon name="camera" size={20} color="#fff" />
                </BtnSnap>
            ) : (
                <BtnSnap onPress={resetPicture}>
                    <Icon name="redo-alt" size={20} color="#fff" />
                </BtnSnap>
            )}

            <Button
                loading={loading}
                disabled={!preview}
                onPress={!preview ? () => {} : handleSubmit}
            >
                {preview ? 'Enviar' : 'Aguardando foto'}
            </Button>
        </Container>
    );
}

ConfirmarEntrega.navigationOptions = {
    title: 'Confirmar Entrega',
};

ConfirmarEntrega.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        state: PropTypes.shape({
            params: PropTypes.object.isRequired,
        }),
    }).isRequired,
};
