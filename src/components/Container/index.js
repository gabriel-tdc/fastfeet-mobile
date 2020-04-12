import React from 'react';

import PropTypes from 'prop-types';
import { Element, BackgroundTop } from './styles';

export default function Container({ bgTop, children }) {
    return (
        <>
            {bgTop && <BackgroundTop />}
            <Element>{children}</Element>
        </>
    );
}

Container.propTypes = {
    bgTop: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

Container.defaultProps = {
    bgTop: false,
};
