import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import { Link } from 'react-router';
const LoginButton = React.createClass({
    propTypes: {},

    render() {
        const style = {
            border: '2px solid #e45a4c',
            color: 'white',
            marginLeft: '14px',
            textTransform: 'none',
            letterSpacing: '0.54px',
            fontWeight: 700

        };
        return <FlatButton
            style={style}
            onClick={this.props.signup}
            label="Register"
            hoverColor="#e45a4c"
            rippleColor="#E87165"
        />;
    }
});

export default LoginButton;
