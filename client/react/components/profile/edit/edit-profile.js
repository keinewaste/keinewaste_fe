import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import classnames from 'classnames';
import './edit-profile.scss';

const EditProfile = React.createClass({
    propTypes: {},

    getDefaultProps() {
        return {
            user: {
                name: 'Michael Schumacher'
            }
        }
    },

    getInitialState() {
        return {
            team: 'donator'
        }
    },

    saveToState(field, e) {
        const value = e.target.value;

        if (value) {
            this.setState({
                [field]: value
            });
        }
    },

    setDonator() {
        this.setState({
            team: 'donator'
        })
    },

    setFoodReceiver() {
        this.setState({
            team: 'receiver'
        })
    },

    onSave() {
        console.log(this.state);
    },

    render() {
        const { user } = this.props;
        const selectedTeam = this.state.team;

        const images = {
            avatar: require('../../../../assets/images/avatar.jpg'),
            donator: require('../../../../assets/images/donator.png'),
            donatorSelected: require('../../../../assets/images/donator-selected.png'),
            receiver: require('../../../../assets/images/receiver.png'),
            receiverSelected: require('../../../../assets/images/receiver-selected.png')
        };


        const donatorImg = selectedTeam === 'donator' ? images.donatorSelected : images.donator;

        const receiverImg = selectedTeam === 'receiver' ? images.receiverSelected : images.receiver;


        return (
            <div className="edit-profile">
                <h2>{user.name}</h2>

                <div className="wrap">
                    <img className="avatar" src={images.avatar} />
                    <div className="form">
                        <TextField
                            onKeyDown={this.saveToState.bind(this, 'association_name')}
                            floatingLabelText="Business/Association name"
                        /><br/>
                        <TextField
                            onKeyDown={this.saveToState.bind(this, 'address')}
                            floatingLabelText="Address"
                            hintText="Street, ZIP, City"
                        /><br/>
                        <TextField
                            onKeyDown={this.saveToState.bind(this, 'telephone')}
                            floatingLabelText="Telephone"
                        /><br/>

                        <div className="choose-team">
                        <p className="title">Your role in the Movement</p>
                            <div className="team-picker">
                                <div className="donator">
                                    <img src={donatorImg} onClick={this.setDonator}/>
                                    <p className="team-title">
                                        Food donor
                                    </p>
                                </div>
                                <div className="receiver">
                                    <img src={receiverImg} onClick={this.setFoodReceiver}/>
                                    <p className="team-title">
                                        Food receiver
                                    </p>
                                </div>

                            </div>
                        </div>
                        <RaisedButton
                            label="Save"
                            primary
                            onClick={this.onSave}
                        />

                    </div>


                </div>

            </div>
        );
    }
});

export default EditProfile;
