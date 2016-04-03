import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import './food-selection.scss';

const FoodSelection = React.createClass({
    propTypes: {},
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
                    label="Bread"
                    labelPosition="left"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Vegetables/fruits"
                    labelPosition="left"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Diary products/eggs"
                    labelPosition="left"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Raw meat/seafood"
                    labelPosition="left"
                    style={styles.checkbox}
                />
            </div>
            <div className="food-type2 food-group">
                <Checkbox
                    label="General"
                    labelPosition="left"
                    style={styles.checkbox}
                />

                <Checkbox
                    label="Vegetarian"
                    labelPosition="left"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Vegan"
                    labelPosition="left"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Kosher"
                    labelPosition="left"
                    style={styles.checkbox}
                />
                <Checkbox
                    label="Halal"
                    labelPosition="left"
                    style={styles.checkbox}
                />
            </div>
        </div>;
    }
});

export default FoodSelection;
