import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Box({ children, ...rest }) {
    return <Container {...rest}>{children}</Container>;
}

Box.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
        .isRequired,
};
