import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FoodInput from '../components/donate/step1/food-input';
import { requestFood } from 'client/react/actions/food';

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        requestFood
    }, dispatch)
);


function mapStateToProps(state) {
    return {
        foodList: state.foodList
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodInput);