import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

import './food-input.scss';


const FoodInput = React.createClass({
    propTypes: {},
    getDefaultProps() {
        return {
            foodList: ['c', 'carton', 'dddd']
        }
    },

    getInitialState() {
        return {
            foodList: [],
            foodName: '',
            foodCount: 1
        }
    },

    handleUpdateInput(value) {
        this.props.requestFood(value);

        this.setState({
            foodName: value
        });
    },

    handleUpdateCount(e, value) {
        this.setState({
            foodCount: Number(value)
        })
    },
    selectFoodName(value) {
        this.setState({
            foodName: value
        });
    },

    addFoodToList() {

        const { foodName, foodCount } = this.state;

        if (foodName) {
            this.setState({
                foodList: this.state.foodList.concat({
                    quantity: Number(foodCount) || 1,
                    name: foodName
                }),

                foodName: '',
                foodCount: 1

            });

        }
    },
    render() {
        const { foodList } = this.state;

        const listStyle = {
            width: 350,
            marginTop: 20,
            textAlign: 'center',
            display: foodList.length ? 'inline-block' : 'none',
            padding: 16
        };

        return (
            <div className="food-input">
                <h3>More detail about your food (optional)</h3>
                <p className="description">Start typing to get some suggestions</p>

                <AutoComplete
                    hintText="Type food name"
                    dataSource={this.props.foodList}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.selectFoodName}
                    searchText={this.state.foodName}
                    style={{
                        marginRight: 25
                    }}
                />
                <TextField
                    style={{
                        width: 60,
                        marginRight: 25
                    }}
                    value={this.state.foodCount}
                    onChange={this.handleUpdateCount}
                    hintText="Quantity"
                    type="number"

                />
                <FloatingActionButton onClick={this.addFoodToList} mini={true} style={{
                    marginBottom: 13
                }} >
                    <ContentAdd />
                </FloatingActionButton>

                <div>
                    <Paper zDepth={2} style={listStyle} rounded={false}>
                        {foodList.map((food, index) => {
                            return <div key={index} className="food-item">{food.quantity} {food.name}</div>
                        })}
                    </Paper>
                </div>

            </div>
        );
    }
});

export default FoodInput;
