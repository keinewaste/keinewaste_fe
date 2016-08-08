import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import FlatButton from 'material-ui/lib/flat-button';
import { Link } from 'react-router';

const Header = React.createClass({
    mixins: [PureRenderMixin],
    render() {
        const style = {
            color: 'black',
            textTransform: 'none',
            letterSpacing: '0.54px',
            fontWeight: 700
        };

        return (
            <div className="header">
                <div className="header-logo"></div>
                <div className="auth-buttons">
                    <FlatButton
                        containerElement={<Link to="/" />}
                        style={style}
                        label="Overview"
                    />
                    <FlatButton
                        containerElement={<Link to="/consultant/create" />}
                        style={style}
                        label="Create consultant"
                    />
                </div>
            </div>
        );
    }
});

export default Header;