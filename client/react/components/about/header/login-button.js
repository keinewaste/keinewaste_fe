import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

const LoginButton = React.createClass({
    propTypes: {},
    render() {
        const style = {
            color: 'white',
            textTransform: 'none',


            letterSpacing: '0.54px',
            fontWeight: 700
        };
        return <FlatButton
            style={style}
            label="Log in"
            href="/profile"
            linkButton={true}
        />;
    }
});

export default LoginButton;
