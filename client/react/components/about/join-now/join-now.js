import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import './join-now.scss';

const JoinNow = React.createClass({
    propTypes: {},
    render() {
        const style = {
            border: '4px solid #fff',
            color: 'white',

            marginLeft: '14px',
            textTransform: 'none',
            letterSpacing: '0.54px',
            fontWeight: 700
        };

        return (
            <div className="join-now">
                <div className="content">
                    <FlatButton
                        style={style}
                        label="JOIN THE MOVEMENT NOW"
                        hoverColor="#e45a4c"
                        backgroundColor="#e45a4c"
                        rippleColor="#E87165"
                    />
                </div>
            </div>
        );
    }
});

export default JoinNow;
