import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import './food-selection.scss';

const FoodSelection = React.createClass({
    propTypes: {},
    getInitialState() {
        return {
            categories: []
        }
    },
    saveFoodCategory(id, e, isChecked) {

        const categories = this.state.categories.slice();

        if (isChecked) {
            this.setState({
                categories: categories.concat(id)
            });
        } else {
            const categoryIndex = categories.indexOf(id);

            if (categoryIndex > -1) {
                categories.splice(categoryIndex, 1);

                this.setState({
                    categories
                });
            }

        }


    },
    isChecked(id) {
        return this.state.categories.indexOf(id) > -1;
    },
    render() {

        const styles = {
            block: {
                maxWidth: 250,
            },
            checkbox: {
                marginBottom: 25
            }
        };

        return <div className="food-selection">
            <div className="food-type1 food-group">
                <Checkbox
                    onCheck={this.saveFoodCategory.bind(this, 1)}
                    label="Bread"
                    categoryId="1"
                    labelPosition="left"
                    checked={this.isChecked(1)}
                    style={styles.checkbox}
                />
                <Checkbox
                    onCheck={this.saveFoodCategory.bind(this, 3)}
                    categoryId="3"
                    label="Vegetables/fruits"
                    labelPosition="left"
                    checked={this.isChecked(3)}
                    style={styles.checkbox}
                />
                <Checkbox
                    onCheck={this.saveFoodCategory.bind(this, 2)}
                    checked={this.isChecked(2)}
                    categoryId="2"
                    label="Diary products/eggs"
                    labelPosition="left"
                    style={styles.checkbox}
                />
                <Checkbox
                    onCheck={this.saveFoodCategory.bind(this, 4)}
                    checked={this.isChecked(4)}
                    categoryId="4"
                    label="Raw meat/seafood"
                    labelPosition="left"
                    style={styles.checkbox}
                />
            </div>
            <div className="food-type2 food-group">
                <Checkbox
                    onCheck={this.saveFoodCategory.bind(this, 5)}
                    checked={this.isChecked(5)}
                    categoryId="5"
                    label="General"
                    labelPosition="left"
                    style={styles.checkbox}
                />

                <Checkbox
                    onCheck={this.saveFoodCategory.bind(this, 6)}
                    checked={this.isChecked(6)}
                    categoryId="6"
                    label="Vegetarian"
                    labelPosition="left"
                    style={styles.checkbox}
                />
                <Checkbox
                    onCheck={this.saveFoodCategory.bind(this, 7)}
                    checked={this.isChecked(7)}
                    categoryId="7"
                    label="Vegan"
                    labelPosition="left"
                    style={styles.checkbox}
                />
                <Checkbox
                    onCheck={this.saveFoodCategory.bind(this, 8)}
                    checked={this.isChecked(8)}
                    categoryId="8"
                    label="Kosher"
                    labelPosition="left"
                    style={styles.checkbox}
                />
                <Checkbox
                    onCheck={this.saveFoodCategory.bind(this, 9)}
                    checked={this.isChecked(9)}
                    categoryId="9"
                    label="Halal"
                    labelPosition="left"
                    style={styles.checkbox}
                />
            </div>
        </div>;
    }
});

export default FoodSelection;
