import React from 'react';

import {deepOrange500} from 'material-ui/lib/styles/colors';


import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import theme from '../theme';

const App = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext() {
        return {
            muiTheme: getMuiTheme(theme, { userAgent: 'all' })
        };
    },
    componentDidMount() {
        window.fbAsyncInit = () => {
            FB.init({
                appId: '1690233737898636',
                xfbml: true,
                version: 'v2.5'
            });


            this.props.checkUser();
        };
    },
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

export default App;