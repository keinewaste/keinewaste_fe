import React from 'react';

import {deepOrange500} from 'material-ui/lib/styles/colors';


import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import theme from '../theme';

import About from './about/about';


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
                <About />

            </div>
        );
    }
});

export default App;