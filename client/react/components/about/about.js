import React from 'react';
import './about.scss';

import Header from '../../containers/header';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MainImageBlock from './main-image-block/main-image-block';
import CompanyDescription from './company-description/company-description';
import HowItWorks from './how-it-works/how-it-works';
import JoinNow from './join-now/join-now';

const About = React.createClass({
    propTypes: {},
    mixins: [PureRenderMixin],
    render() {
        return (
            <div className="about">
                <Header />
                <MainImageBlock />
                <CompanyDescription />
                <HowItWorks />
                <JoinNow />
            </div>
        );
    }
});

export default About;
