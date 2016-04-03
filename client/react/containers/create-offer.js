import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateOffer from '../components/donate/step1/create-offer';
import { requestCreateOffer } from 'client/react/actions/food';

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        requestCreateOffer
    }, dispatch)
);


function mapStateToProps(state) {
    return {
        foodList: state.foodList
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOffer);