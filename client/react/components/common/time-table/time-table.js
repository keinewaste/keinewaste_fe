import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/lib/table';
import includes from 'lodash/includes';
import IconButton from 'material-ui/lib/icon-button';
import PrintIcon from 'material-ui/lib/svg-icons/action/print';
import { requestOverview } from 'client/react/actions/consultants';
import ConsultantApi from 'client/sdk';

import './time-table.scss';

const Consultants = ConsultantApi.Consultants();

const TimeTable = React.createClass({
    propTypes: {},
    componentDidMount: function() {
        Consultants.GetAll({
            date: "01-01-16"
        }, function(err, data) {
            if (err) {
                console.log('get consultants failed', err);
            }
            console.log ('setting data', data);
            this.setState({
              consultantsList: data
            });
        })

        console.log(this.state);
    },
    getInitialState() {
        return {
            consultants: [
                             {
                                 firstName: "Yegor",
                                 lastName: "Tokmakov",
                                 timeslots: [9,10,11,12,20,21],
                                 bookings: {
                                     11: {
                                         firstName: "Vasya",
                                         lastName: "Pupkin",
                                         time: 11
                                     }
                                 }
                             }
                         ]
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
                <Table
                  className="time-table"
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
        );
    }
});

export default TimeTable;
