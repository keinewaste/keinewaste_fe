import React from 'react';

import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

import TimePicker from 'material-ui/lib/time-picker/time-picker';
import moment from 'moment';

import './delivery.scss';

const Delivery = React.createClass({
    propTypes: {},

    getInitialState() {
        return {
            deliveryType: 'pickup',
            deliveryArea: "1000"
        }
    },

    saveDeliveryType(e, value) {
        this.setState({
            deliveryType: value
        });
    },
    saveDeliveryArea(e, value) {
        this.setState({
            deliveryArea: value
        });
    },
    saveDeliveryTime(e, value) {
        const dateTime = moment(value).format('YYYY-MM-DD HH:mm');

        this.setState({
            deliveryTime: dateTime
        });
    },
    render() {
        const smallMap = require('./../../../../assets/images/small-map.jpg');


        return (
            <div className="delivery">
                <div className="delivery-type">
                    <h3>Could you deliver the food?</h3>
                    <RadioButtonGroup name="deliveryType" defaultSelected={this.state.deliveryType} onChange={this.saveDeliveryType}>
                        <RadioButton
                            value="delivery"
                            label="Yes, I can deliver."
                        />
                        <RadioButton
                            value="pickup"
                            label="No, come pick up the food."
                        />
                        <RadioButton
                            value="disabled"
                            label="Uber Rush ®"
                            disabled={true}
                        />
                    </RadioButtonGroup>
                </div>

                <div className="delivery-area">
                    <span className="delivery-area-label">Area</span>
                    <RadioButtonGroup className="delivery-area-choises" name="deliveryArea" defaultSelected={this.state.deliveryArea} onChange={this.saveDeliveryArea}>
                        <RadioButton
                            value="1000"
                            label="1 km"
                        />
                        <RadioButton
                            value="2000"
                            label="2 km"
                        />
                        <RadioButton
                            value="5000"
                            label="5 km"
                        />
                        <RadioButton
                            value="disabled"
                            label="city"
                            disabled={true}
                        />
                    </RadioButtonGroup>
                    <img src={smallMap} />
                </div>

                <div className="delivery-time">
                    <h3>When are you available?</h3>
                    <TimePicker
                        autoOk={true}
                        format="24hr"
                        hintText="24hr Format"
                        onChange={this.saveDeliveryTime}
                    />
                </div>


            </div>
        );
    }
});

export default Delivery;
