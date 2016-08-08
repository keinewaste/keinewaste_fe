import React from 'react';
import Header from '../layout/header';
import Checkbox from 'material-ui/lib/checkbox';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import TimeTable from '../common/time-table/time-table';
import assign from 'lodash/assign';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

import './overview.scss';

const Overview = React.createClass({
    propTypes: {},
    render() {
        return (
            <div className="overview">
                <div className="content">
                    <h1>Overview</h1>
                    <DatePicker
                        hintText="Landscape Dialog"
                        value={new Date()}
                        mode="landscape" />

                    <TimeTable ref="timeTable" />
                </div>
            </div>
        );
    }
});

export default Overview;
