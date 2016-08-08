import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/lib/table';
import includes from 'lodash/includes';
import IconButton from 'material-ui/lib/icon-button';
import PrintIcon from 'material-ui/lib/svg-icons/action/print';
import ConsultantApi from 'client/sdk';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import moment from 'moment';

import './time-table.scss';

const Consultants = ConsultantApi.Consultants();

const TimeTable = React.createClass({
    propTypes: {},
    componentWillMount: function() {
        this.updateTable(this.state.date);
    },
    updateTable(date) {
        const dateTime = moment(date).format('DD-MM-YYYY');
        Consultants.GetAll({
            date: dateTime
        }, (err, data) => {
            if (err) {
                console.log('get consultants failed', err);
            }
            this.setState({
              consultants: data
            });
        })
    },
    setDate(e, value) {
        this.setState({
            date: value
        });
        this.updateTable(value);
    },
    getInitialState() {
        return {
            consultants: [],
            date: new Date()
        }
    },
    render() {
        const styles = {
          printIcon: {
            width: 16,
            height: 16,
          }
        };

        return (
                <div className="time-table">
                <DatePicker
                    hintText="Landscape Dialog"
                    onChange={this.setDate}
                    value={this.state.date}
                    mode="landscape" />
                <Table
                  selectable={false}
                >
                   <TableHeader
                       displaySelectAll={false}
                       adjustForCheckbox={false}
                       enableSelectAll={false}
                   >
                     <TableRow>
                         <TableHeaderColumn></TableHeaderColumn>
                         {this.state.consultants.map( (row, index) => (
                             <TableHeaderColumn>
                                {row.firstName} {row.lastName}
                                <IconButton
                                    href="/agenda"
                                    tooltip="Print agenda"
                                    iconStyle={styles.printIcon}
                                    style={styles.printIcon}
                                    linkButton={true}
                                >
                                    <PrintIcon />
                                </IconButton>
                             </TableHeaderColumn>
                         ))}
                     </TableRow>
                   </TableHeader>
                   <TableBody
                       displayRowCheckbox={false}
                       deselectOnClickaway={false}
                       showRowHover={false}
                   >
                           {[...Array(24).keys()].map( (row, index) => (
                             <TableRow key={index}>
                                 <TableRowColumn>{((index < 10) ? ("0" + index) : index) + ":00"}</TableRowColumn>
                                 {this.state.consultants.map( (row, index_column) => (
                                   <TableRowColumn
                                       className={(index in row.bookings) ? "booked-slot" : includes(row.timeslots, index)? "available-slot" : ""}
                                   >
                                   {(index in row.bookings) ? row.bookings[index].firstName + " " + row.bookings[index].lastName : ""}
                                   </TableRowColumn>
                                 ))}
                             </TableRow>
                             ))}
                   </TableBody>
                </Table>
                </div>
        );
    }
});

export default TimeTable;
