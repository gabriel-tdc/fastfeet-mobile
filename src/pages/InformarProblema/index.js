import React, { useState } from 'react';

import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { problemRequest } from '~/store/modules/problem/actions';

import Container from '~/components/Container';
import Box from '~/components/Box';
import Input from '~/components/Input';
import Button from '~/components/Button';

const styles = StyleSheet.create({
    input: {
        textAlignVertical: 'top',
        height: 300,
    },
});

export default function InformarProblema({ navigation }) {
    const { id } = navigation.state.params;

    const dispatch = useDispatch();

    const [description, setDescription] = useState('');

    function onSubmit() {
        dispatch(problemRequest(id, description));
        navigation.goBack();
    }

    return (
        <>
            <Container bgTop>
                <Box>
                    <Input
                        style={styles.input}
                        multiline
                        numberOfLines={4}
                        onChangeText={setDescription}
                        placeholder="Inclua aqui o problema que ocorreu na entrega."
                    />
                    <Button
                        onPress={() => onSubmit()}
                        style={{ backgroundColor: '#7D40E7' }}
                    >
                        Enviar
                    </Button>
                </Box>
            </Container>
        </>
    );
}

InformarProblema.navigationOptions = {
    title: 'Informar Problema',
};

InformarProblema.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        goBack: PropTypes.func.isRequired,
        state: PropTypes.shape({
            params: PropTypes.object.isRequired,
        }),
    }).isRequired,
};
