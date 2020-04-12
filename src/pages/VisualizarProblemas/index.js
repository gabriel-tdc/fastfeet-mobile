import React from 'react';

import Container from '~/components/Container';

import { Title, Message, Data, Box } from './styles';

export default function InformarProblema() {
    return (
        <>
            <Container bgTop>
                <Title>Encomenda 01</Title>
                <Box>
                    <Message>Destinatário ausente </Message>
                    <Data>14/01/2020</Data>
                </Box>
                <Box>
                    <Message>Destinatário ausente </Message>
                    <Data>14/01/2020</Data>
                </Box>
                <Box>
                    <Message>Destinatário ausente </Message>
                    <Data>14/01/2020</Data>
                </Box>
                <Box>
                    <Message>Destinatário ausente </Message>
                    <Data>14/01/2020</Data>
                </Box>
            </Container>
        </>
    );
}

InformarProblema.navigationOptions = {
    title: 'Visualizar problemas',
};
