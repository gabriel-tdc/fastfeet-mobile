import React, { useState, useRef } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { RNCamera } from 'react-native-camera';

import api from '~/services/api';
// import axios from 'axios';

import Container from '~/components/Container';

import { BtnSnap, PhotoHolder, ImagePreview, Camera, Button } from './styles';

const androidCameraPermissionOptions = {
    title: 'Permissão para utilizar a câmera',
    message: 'O aplicativo necessita de sua permissão para utilizar sua câmera',
    buttonPositive: 'Aceitar',
    buttonNegative: 'Cancelar',
};

export default function ConfirmarEntrega() {
    const [preview, setPreview] = useState('');
    const refCamera = useRef();

    async function takePicture() {
        const camera = refCamera.current;
        if (camera) {
            const options = { quality: 0.5, base64: false };
            const data = await camera.takePictureAsync(options);

            console.log(data);

            setPreview(data.uri);
        }
    }

    function resetPicture() {
        setPreview('');
    }

    async function handleSubmit() {
        // console.warn('bora enviar');

        // const photo = { uri: preview };
        // console.log(preview);

        const data = new FormData();
        data.append('file', {
            type: 'image/jpeg',
            uri: preview,
            name: 'd3fc4337-dcec-4cba-a86f-68b67ebc5c3d.jpg',
        });

        const response = await api.put('delivery/5/status/', data);

        // RNFetchBlob.config({
        //     fileCache: true,
        //     appendExt: 'jpg',
        // });

        // const PicturePath = preview;
        // console.warn(PicturePath);
        // if (PicturePath) {
        //     // Create the form data object
        //     const data = new FormData();
        //     data.append('file', {
        //         uri: '1bea6967-a1bd-4601-9a69-a24833675dcf.jpg',
        //         name: 'selfie.jpg',
        //         type: 'image/jpeg',
        //     });
        //     data.append('teste', 'aaa');

        //     // Create the config object for the POST
        //     // You typically have an OAuth2 token that you use for authentication
        //     const config = {
        //         method: 'PUT',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'multipart/form-data',
        //         },
        //         body: data,
        //     };

        //     fetch('http://192.168.1.104:3333/delivery/5/status/', config)
        //         .then((responseData) => {
        //             // Log the response form the server
        //             // Here we get what we sent to Postman back
        //             console.warn(responseData);
        //         })
        //         .catch((err) => {
        //             console.warn(err);
        //         });
        // }

        // const uploadData = new FormData();
        // uploadData.append('type', 'image/jpeg');

        // uploadData.append('file', {
        //     type: 'image/jpeg',
        //     uri: preview,
        //     name: 'd3fc4337-dcec-4cba-a86f-68b67ebc5c3d.jpg',
        // });

        // axios({
        //     method: 'put',
        //     url: 'http://192.168.1.104:3333/delivery/5/status/',
        //     data: uploadData,
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'cache-control': 'no-cache',
        //         'Postman-Token': '8bdabec9-2814-4e70-85e9-a43a9f30b174',
        //     },
        //     processData: false,
        //     contentType: false,
        //     mimeType: 'multipart/form-data',
        // })
        //     .then(function (response) {
        //         console.warn('response', response.data);
        //     })
        //     .catch(function (error) {
        //         console.warn(error);
        //     });

        // const formdata = new FormData();

        // // formdata.append('product[name]', 'test');
        // // formdata.append('product[price]', 10);
        // // formdata.append('product[category_ids][]', 2);
        // formdata.append('idteste', '12dsadadsa');
        // formdata.append('file', {
        //     uri: preview,
        //     name: 'file',
        //     type: 'image/jpeg',
        // });

        // console.warn(preview);
        // // const fileData = new FormData();
        // // fileData.append('file', 'teste');

        // const teste = await api.put(`/delivery/5/status/`, { formdata });

        // const formData = new FormData();
        // formData.append('action', 'ADadD');
        // formData.append('param', 0);
        // formData.append('secondParam', 0);
        // formData.append('file', {
        //     uri: preview,
        //     name: 'file',
        //     type: 'image/jpeg',
        // });

        // axios({
        //     url: 'http://192.168.1.104:3333/delivery/5/status/',
        //     method: 'PUT',
        //     data: formData,
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'multipart/form-data',
        //     },
        // });
    }

    return (
        <Container>
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

            <Button onPress={handleSubmit}>Enviar</Button>
        </Container>
    );
}
