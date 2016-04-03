import React from 'react';

const ViewProfile = React.createClass({
    propTypes: {},
    getDefaultProps() {
        return {
            user: {
                name: 'Michael Schumacher'
            }
        }
    },
    render() {
        const { user } = this.props;

        return (
            <div>
                <h2>{user.name}</h2>
            </div>
        );
    }
});

export default ViewProfile;
