import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

const CreateConsultantButton = React.createClass({
    propTypes: {},
    render() {
        const style = {
            color: 'black',
            textTransform: 'none',
            letterSpacing: '0.54px',
            fontWeight: 700
        };
        return <FlatButton
            style={style}
            label="Create consultant"
            href="/consultant/create"
            linkButton={true}
        />;
    }
});

export default CreateConsultantButton;
