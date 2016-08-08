import React from 'react';
import Header from '../../layout/header';
import Checkbox from 'material-ui/lib/checkbox';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import SlotSelection from '../../common/slot-selection/slot-selection';
import assign from 'lodash/assign';

import './create-consultant.scss';

const CreateConsultant = React.createClass({
    propTypes: {},
    createOffer() {
        const foodGroup = this.refs.foodGroup;
        const foodList = this.refs.foodList;
        const delivery = this.refs.delivery;

        const data = assign({}, foodGroup.state, { foodList: [ {
            quantity: 1,
            name: foodList.store.getState().foodList[0]
        }] }, delivery.state);


        this.props.requestCreateOffer(data);
    },
    render() {
        return (
            <div className="create-consultant">
                <div className="content">
                    <h1>Create consultant</h1>
                    <h3>Contact information</h3>
                        <TextField
                            style={{
                                width: 250,
                                marginRight: 25
                            }}
//                            value={this.state.foodCount}
                            hintText="First name"
                            type="text"
                        />

                        <TextField
                            style={{
                                width: 250,
                                marginRight: 25
                            }}
//                            value={this.state.foodCount}
                            hintText="Last name"
                            type="text"
                        />

                        <br />

                        <TextField
                            style={{
                                width: 250,
                                marginRight: 25
                            }}
//                            value={this.state.foodCount}
                            hintText="Skype"
                            type="text"
                        />

                        <TextField
                            style={{
                                width: 250,
                                marginRight: 25
                            }}
//                            value={this.state.foodCount}
                            hintText="Google Hangouts"
                            type="text"
                        />

                        <br />

                        <TextField
                            style={{
                                width: 250,
                                marginRight: 25
                            }}
//                            value={this.state.foodCount}
                            hintText="Work phone"
                            type="text"
                        />

                        <TextField
                            style={{
                                width: 250,
                                marginRight: 25
                            }}
//                            value={this.state.foodCount}
                            hintText="Private phone"
                            type="text"
                        />

                        <br />

                        <TextField
                            style={{
                                width: 250,
                                marginRight: 25
                            }}
//                            value={this.state.foodCount}
                            hintText="Email"
                            type="text"
                        />

                    <h3>Available slots</h3>

                    <SlotSelection ref="slotSelection" />

                    <div className="buttons">
                        <RaisedButton label="Save consultant info" primary onClick={this.createOffer} />
                    </div>

                </div>
            </div>
        );
    }
});

export default CreateConsultant;
