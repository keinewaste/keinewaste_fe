import React from 'react';
import TextField from 'material-ui/lib/text-field';

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

    render() {
        const { user } = this.props;

        const avatar = require('../../../../assets/images/avatar.jpg');

        const inputStyle = {

        };
        return (
            <div className="edit-profile">
                <h2>{user.name}</h2>

                <div className="wrap">
                    <img src={avatar} />
                    <div className="form">
                        <TextField
                            inputStyle={inputStyle}
                            floatingLabelText="Business/Association name"
                        /><br/>
                        <TextField
                            floatingLabelText="Address"
                            hintText="Street, ZIP, City"
                        /><br/>
                        <TextField
                            floatingLabelText="Telephone"
                        /><br/>

                    </div>
                </div>

            </div>
        );
    }
});

export default EditProfile;
