import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/lib/table';

import './slot-selection.scss';

const SlotSelection = React.createClass({
    propTypes: {},
    getInitialState() {
        return {
            categories: []
        }
    },
    render() {

        var slotKeys = [];

        for (var hn = 1; hn <= 23; hn++) {
            var hourKeys = [];
            for (var dn = 1; dn <= 7; dn++) {
                hourKeys.push({
                    label: ((hn < 10) ? ("0" + hn) : hn) + ":00",
                    disabled: dn == 7 ? true : false,
                    default_checked: hn >= 9 && hn <= 22 && dn != 7 ? true : false
                });
            }
            slotKeys.push(hourKeys);
        }

        return (
                <Table
                  selectable={false}
                >
                   <TableHeader
                       displaySelectAll={false}
                       adjustForCheckbox={false}
                       enableSelectAll={false}
                   >
                     <TableRow>
                       <TableHeaderColumn>Monday</TableHeaderColumn>
                       <TableHeaderColumn>Tuesday</TableHeaderColumn>
                       <TableHeaderColumn>Wednesday</TableHeaderColumn>
                       <TableHeaderColumn>Thursday</TableHeaderColumn>
                       <TableHeaderColumn>Friday</TableHeaderColumn>
                       <TableHeaderColumn>Saturday</TableHeaderColumn>
                       <TableHeaderColumn>Sunday</TableHeaderColumn>
                     </TableRow>
                   </TableHeader>
                   <TableBody
                       displayRowCheckbox={false}
                       deselectOnClickaway={false}
                       showRowHover={false}
                   >
                           {slotKeys.map( (row, index) => (
                             <TableRow key={index}>
                                 {row.map( (column, index_column) => (
                                   <TableRowColumn>
                                    <Checkbox
                                      label={column.label}
                                      defaultChecked={column.default_checked}
                                      disabled={column.disabled}
                                    />
                                   </TableRowColumn>
                                 ))}
                             </TableRow>
                             ))}
                   </TableBody>
                 </Table>
        );
    }
});

export default SlotSelection;
