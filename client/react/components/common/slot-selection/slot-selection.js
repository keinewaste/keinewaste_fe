import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/lib/table';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './slot-selection.scss';

const SlotSelection = React.createClass({
    mixins: [PureRenderMixin],
    propTypes: {},
    getInitialState() {
        var updatedCategories = {};
        for (var hn = 1; hn <= 23; hn++) {
            for (var dn = 1; dn <= 7; dn++) {
                if (hn >= 9 && hn <= 22 && dn != 7) {
                    updatedCategories[dn + "_" + hn] = true;
                } else {
                    updatedCategories[dn + "_" + hn] = false;
                }
            }
        }

        return {
            categories: updatedCategories
        }
    },
    _handleSlotChange: function(e) {
        var updatedCategories = this.state.categories;
        if (e.target.checked) {
            updatedCategories[e.target.value] = true;
        } else {
            updatedCategories[e.target.value] = false;
        }
        console.log(updatedCategories);
        this.setState({
            categories: updatedCategories
        });
    },
    render() {

        var slotKeys = [];

        for (var hn = 1; hn <= 23; hn++) {
            var hourKeys = [];
            for (var dn = 1; dn <= 7; dn++) {
                hourKeys.push({
                    label: ((hn < 10) ? ("0" + hn) : hn) + ":00",
                    value: dn + "_" + hn,
                    disabled: dn == 7 ? true : false
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
                                      value={column.value}
                                      defaultChecked={this.state.categories[column.value]}
                                      disabled={column.disabled}
                                      onCheck={this._handleSlotChange}
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
