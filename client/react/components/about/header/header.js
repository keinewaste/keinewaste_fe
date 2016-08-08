import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HeaderLogo from './logo';
import RegisterButton from './register-button';
import CreateConsultantButton from './create-consultant-button';


const Header = React.createClass({
    mixins: [PureRenderMixin],
    render() {
        return (
            <div
                className="header"
            >
                <HeaderLogo />
                <div className="auth-buttons">
                    <CreateConsultantButton />
                    <RegisterButton signup={this.props.signup} />
                </div>
            </div>
        );
    }
});

export default Header;