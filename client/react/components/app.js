import React from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import theme from '../theme';
import Header from './layout/header';

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
                {this.props.children}
            </div>
        );
    }
});

export default App;