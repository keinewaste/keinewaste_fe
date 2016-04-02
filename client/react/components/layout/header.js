import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

import HeaderLogo from './logo';
import LoginButton from './login-button';
import RegisterButton from './register-button';


const Header = React.createClass({
    render() {
        return (
            <div
                className="header"
            >
                <HeaderLogo />
                <LoginButton />
                <RegisterButton />

            </div>
        );
    }
});

export default Header;