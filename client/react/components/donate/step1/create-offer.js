import React from 'react';
import Header from '../../layout/header';
import Checkbox from 'material-ui/lib/checkbox';
import RaisedButton from 'material-ui/lib/raised-button';

import FoodSelection from '../../common/food-selection/food-selection';
import FoodInput from '../../../containers/food-input';
import Delivery from './delivery';
import assign from 'lodash/assign';

import './create-offer.scss';

const Donate = React.createClass({
    propTypes: {},
    createOffer() {
        const foodGroup = this.refs.foodGroup;
        const foodList = this.refs.foodList;
        const delivery = this.refs.delivery;

        const data = assign({}, foodGroup.state, { foodList: [ {
            quantity: 1,
            name: foodList.store.getState().foodList[0]
        }] }, delivery.state);

        this.props.requestCreateOffer(data);
    },
    render() {
        return (
            <div className="create-offer">
                <Header />

                <div className="content">
                    <h1>Donate</h1>
                    <h3>You have got (select at least one)</h3>
                    <FoodSelection ref="foodGroup"/>
                    <FoodInput ref="foodList"/>
                    <Delivery ref="delivery" />

                    <div className="buttons">
                        <RaisedButton label="Do the magic!" primary onClick={this.createOffer} />
                    </div>

                </div>
            </div>
        );
    }
});

export default Donate;
