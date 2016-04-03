import assign from 'lodash/assign';
import { routerReducer } from 'react-router-redux';
import { SET_FOODLIST } from '../actions/food';

function foodListReducer(state = [], action={}) {
    switch(action.type) {
        case SET_FOODLIST:

            return action.foodList;
            break;

        default:
            return state;
    }
}

export { foodListReducer };

const rootReducer = (state, action) =>
    assign({}, state, {
        foodList: foodListReducer(state, action)
    });

export default rootReducer;
