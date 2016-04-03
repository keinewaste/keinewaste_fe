import React from 'react';
import Header from '../../layout/header';
import Checkbox from 'material-ui/lib/checkbox';
import RaisedButton from 'material-ui/lib/raised-button';

import FoodSelection from '../../common/food-selection/food-selection';
import FoodInput from '../../../containers/food-input';
import Delivery from './delivery';

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
                    <FoodInput />
                    <Delivery />

                    <div className="buttons">
                        <RaisedButton label="Do the magic!" primary />
                    </div>

                </div>
            </div>
        );
    }
});

export default Donate;
