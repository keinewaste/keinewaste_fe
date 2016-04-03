import React from 'react';
import Header from '../../layout/header';
import './confirm-offer.scss';

import RaisedButton from 'material-ui/lib/raised-button';

const ConfirmOffer = React.createClass({
    propTypes: {},
    render() {

        const bigMap = require('./../../../../assets/images/big-map.jpg');
        const userLogo = require('./../../../../assets/images/alex.jpg');
        return <div className="confirm-offer">
            <Header />
            <div className="content">
                <h1>You’ve got a match!</h1>
                <div className="columns">
                    <div className="left">
                        <div className="user-info">
                            <img className="user-info-logo" src={userLogo} />
                            <div className="user-info-details">
                                <div className="user-info-details-assoc">Xberg Food Bank</div>
                                <div className="user-info-details-name">Alex Nelson</div>
                            </div>
                        </div>
                        <div className="contact">
                            <p className="label">Address</p>
                            <div className="data"> Mehringdamm 42<br /> 10691<br /> Berlin</div>


                            <p className="label">Contact</p>
                            <div className="data">0176 2323 2323</div>


                            <p className="label">Meeting time</p>
                            <div className="data">20:00</div>
                        </div>
                        <div className="buttons">
                            <RaisedButton label="Confirm" primary onClick={this.createOffer} />
                        </div>
                    </div>
                    <div className="right">
                        <img src={bigMap} />
                    </div>

                </div>

            </div>
        </div>;
    }
});

export default ConfirmOffer;
