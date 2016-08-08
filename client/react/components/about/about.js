import React from 'react';
import './about.scss';

import Header from '../layout/header';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MainImageBlock from './main-image-block/main-image-block';
import JoinNow from './join-now/join-now';

const About = React.createClass({
    propTypes: {},
    mixins: [PureRenderMixin],
    render() {
        return (
            <Header />
        );
    }
});

export default About;
