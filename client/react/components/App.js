import React from 'react';

import {deepOrange500} from 'material-ui/lib/styles/colors';
import Header from './layout/header';

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
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
});

export default App;