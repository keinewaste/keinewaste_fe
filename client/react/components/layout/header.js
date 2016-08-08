import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HeaderLogo from './logo';
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
                </div>
            </div>
        );
    }
});

export default Header;