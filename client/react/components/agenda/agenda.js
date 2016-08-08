import React from 'react';
import Header from '../layout/header';
import Checkbox from 'material-ui/lib/checkbox';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import TimeTable from '../common/time-table/time-table';
import assign from 'lodash/assign';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

import './agenda.scss';

const Agenda = React.createClass({
    propTypes: {},
    createOffer() {
        const foodGroup = this.refs.foodGroup;
        const foodList = this.refs.foodList;
        const delivery = this.refs.delivery;

        const data = assign({}, foodGroup.state, { foodList: [ {
            quantity: 1,
            name: foodList.store.getState().foodList[0]
        }] }, delivery.state);


        this.props.requestCreateOffer(data);
    },
    render() {
        return (
            <div className="agenda">
                <div className="content">
                    <h1>Agenda</h1>
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

export default Agenda;
