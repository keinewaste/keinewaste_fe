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
                <div className="auth-buttons">
                    <LoginButton />
                    <RegisterButton />
                </div>
            </div>
        );
    }
});

export default Header;