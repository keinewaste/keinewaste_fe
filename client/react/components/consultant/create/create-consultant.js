import React from 'react';
import Header from '../../layout/header';
import Checkbox from 'material-ui/lib/checkbox';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import SlotSelection from '../../common/slot-selection/slot-selection';
import assign from 'lodash/assign';
import Snackbar from 'material-ui/lib/snackbar';

import ConsultantApi from 'client/sdk';

import './create-consultant.scss';

const Consultants = ConsultantApi.Consultants();

const CreateConsultant = React.createClass({
    propTypes: {},
    getInitialState: function() {
        return {
            open: false,
            firstName: '',
            lastName: '',
            skype: '',
            hangouts: '',
            workPhone: '',
            privatePhone: '',
            email: '',
        };
    },
    _handleTextFieldChange: function(e) {
        var updatedState = {};
        updatedState[e.target.name] = e.target.value;
        this.setState(updatedState);
    },
    createConsultant() {
        this.setState({
            open: true,
        });

        Consultants.CreateConsultant({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            skype: this.state.skype,
            hangouts: this.state.hangouts,
            workPhone: this.state.workPhone,
            privatePhone: this.state.privatePhone,
            email: this.state.email,
            slotSelection: this.refs.slotSelection.state.categories,
        }, (err, data) => {
            if (err) {
                console.log('create consultant failed', err);
            }

            setTimeout(function(){
             window.location.href = '/';
            }, 2200);

        })
    },
    render() {
        const styles = {
            texts: {
                width: 250,
                marginRight: 25
            }
        }

        return (
            <div className="create-consultant">
                <div className="content">
                    <h1>Create consultant</h1>
                    <h3>Contact information</h3>
                        <TextField
                            style={styles.texts}
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this._handleTextFieldChange}
                            hintText="First name"
                            type="text"
                        />

                        <TextField
                            style={styles.texts}
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this._handleTextFieldChange}
                            hintText="Last name"
                            type="text"
                        />

                        <br />

                        <TextField
                            style={styles.texts}
                            name="skype"
                            value={this.state.skype}
                            onChange={this._handleTextFieldChange}
                            hintText="Skype"
                            type="text"
                        />

                        <TextField
                            style={styles.texts}
                            name="hangouts"
                            value={this.state.hangouts}
                            onChange={this._handleTextFieldChange}
                            hintText="Google Hangouts"
                            type="text"
                        />

                        <br />

                        <TextField
                            style={styles.texts}
                            name="workPhone"
                            value={this.state.workPhone}
                            onChange={this._handleTextFieldChange}
                            hintText="Work phone"
                            type="text"
                        />

                        <TextField
                            style={styles.texts}
                            name="privatePhone"
                            value={this.state.privatePhone}
                            onChange={this._handleTextFieldChange}
                            hintText="Private phone"
                            type="text"
                        />

                        <br />

                        <TextField
                            style={styles.texts}
                            name="email"
                            value={this.state.email}
                            onChange={this._handleTextFieldChange}
                            hintText="Email"
                            type="text"
                        />

                    <h3>Available slots</h3>

                    <SlotSelection ref="slotSelection" />

                    <div className="buttons">
                        <RaisedButton label="Save consultant info" primary onClick={this.createConsultant} />
                    </div>

                    <Snackbar
                      open={this.state.open}
                      message="Consultant entry created"
                      autoHideDuration={2000}
                    />
                </div>
            </div>
        );
    }
});

export default CreateConsultant;
