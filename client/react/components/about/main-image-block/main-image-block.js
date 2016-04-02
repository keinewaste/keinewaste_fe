import React from 'react';
import './main-image-block.scss';
import RaisedButton from 'material-ui/lib/raised-button';
import Header from '../../layout/header';

const MainImageBlock = React.createClass({
    propTypes: {},
    render() {
        return <div className="about-main-image-block">
            <Header />
            <div className="content">
                <h1 className="slogan">STOP THE HUNGER, ONE MEAL AT A TIME</h1>
                <p className="description">KeineWaste connects thousands of local donors and volunteers. You can share your food in less than a minute and get Kudos from the community for your support.</p>
                <div className="join">
                    <RaisedButton
                        className="join-button"
                        backgroundColor="#e45a4c"
                        labelColor="#fff"
                        label="JOIN THE MOVEMENT"
                        style={{
                            fontWeight: 700
                        }}
                    />
                </div>
            </div>
        </div>;
    }
});

export default MainImageBlock;
