import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';

import './food-input.scss';


const FoodInput = React.createClass({
    propTypes: {},
    getDefaultProps() {
        return {
            foodList: ['c', 'carton', 'dddd']
        }
    },

    handleUpdateInput(value) {
        this.props.requestFood(value);
    },
    render() {
        console.log(this.props.foodList);
        return (
            <div className="food-input">
                <h3>More detail about your food (optional)</h3>
                <p className="description">Start typing to get some suggestions</p>

                <AutoComplete
                    hintText="Type c"
                    dataSource={this.props.foodList}
                    onUpdateInput={this.handleUpdateInput}
                />
            </div>
        );
    }
});

export default FoodInput;
