import React from 'react';
import Header from '../layout/header';
import TimeTable from '../common/time-table/time-table';

import './overview.scss';

const Overview = React.createClass({
    propTypes: {},
    render() {
        return (
            <div className="overview">
                <div className="content">
                    <h1>Overview</h1>
                    <TimeTable ref="timeTable" />
                </div>
            </div>
        );
    }
});

export default Overview;
