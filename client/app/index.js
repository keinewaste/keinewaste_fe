import React from 'react';
import ReactDOM from 'react-dom';


const View = React.createClass({
    render() {
        return <div>Hello</div>
    }
});
ReactDOM.render(<View/>, document.getElementById('app'));