import React from 'react';
import Header from '../../layout/header';
import Checkbox from 'material-ui/lib/checkbox';

import FoodSelection from '../../common/food-selection/food-selection';
import './create-offer.scss';

const Donate = React.createClass({
    propTypes: {},
    render() {
        return (
            <div className="create-offer">
                <Header />

                <div className="content">
                    <h1>Donate</h1>
                    <h3>You have got (select at least one)</h3>
                    <FoodSelection />
                </div>
            </div>
        );
    }
});

export default Donate;
