import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HeaderLogo from './logo';
import LoginButton from './login-button';
import RegisterButton from './register-button';


const Header = React.createClass({
    mixins: [PureRenderMixin],
    render() {
        return (
            <div
                className="header"
            >
                <HeaderLogo />
                <div className="auth-buttons">
                    <RegisterButton signup={this.props.signup} />
                </div>
            </div>
        );
    }
});

export default Header;