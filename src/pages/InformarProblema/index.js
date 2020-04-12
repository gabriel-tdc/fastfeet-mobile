import React from 'react';

import { StyleSheet } from 'react-native';

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
    return (
        <>
            <Container bgTop>
                <Box>
                    <Input
                        style={styles.input}
                        multiline
                        numberOfLines={4}
                        placeholder="Inclua aqui o problema que ocorreu na entrega."
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate('VisualizarProblemas')
                        }
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
