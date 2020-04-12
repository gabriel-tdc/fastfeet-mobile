import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ style, children, loading, ...rest }) {
    return (
        <Container style={style} {...rest}>
            {loading ? (
                <ActivityIndicator size="small" />
            ) : (
                <Text>{children}</Text>
            )}
        </Container>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Button.defaultProps = {
    loading: false,
    style: {},
};
