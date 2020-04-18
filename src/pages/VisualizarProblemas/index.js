import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import PropTypes from 'prop-types';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import Loading from '~/components/Loading';
import Container from '~/components/Container';

import { Title, SubTitle, Message, Data, Box } from './styles';

export default function InformarProblema({ navigation }) {
    const { id, product } = navigation.state.params;

    const [loading, setLoading] = useState(true);
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        async function loadProblems() {
            const response = await api.get(`delivery/${id}/problems`);

            setProblems(response.data);
            setLoading(false);
        }

        loadProblems();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Container bgTop>
                        <Title>{product}</Title>

                        {!problems.length && (
                            <Box>
                                <SubTitle>Nenhum problema cadastrado</SubTitle>
                            </Box>
                        )}
                        <FlatList
                            data={problems}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <Box>
                                    <Message>{item.description}</Message>
                                    <Data>
                                        {format(
                                            new Date(item.createdAt),
                                            "dd'/'MM'/'yyyy",
                                            {
                                                locale: pt,
                                            }
                                        )}
                                    </Data>
                                </Box>
                            )}
                        />
                    </Container>
                </>
            )}
        </>
    );
}

InformarProblema.navigationOptions = {
    title: 'Visualizar problemas',
};

InformarProblema.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        state: PropTypes.shape({
            params: PropTypes.object.isRequired,
        }),
    }).isRequired,
};
