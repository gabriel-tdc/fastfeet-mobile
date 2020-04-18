import React from 'react';

import PropTypes from 'prop-types';
import { Element, BackgroundTop, Scroll } from './styles';

export default function Container({ bgTop, scroll, children }) {
    return (
        <>
            {bgTop && <BackgroundTop />}
            {scroll ? (
                <Scroll>{children}</Scroll>
            ) : (
                <Element>{children}</Element>
            )}
        </>
    );
}

Container.propTypes = {
    bgTop: PropTypes.bool,
    children: PropTypes.node.isRequired,
    scroll: PropTypes.bool,
};

Container.defaultProps = {
    bgTop: false,
    scroll: false,
};
