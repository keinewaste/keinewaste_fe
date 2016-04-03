import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/about/header/header';
import { signup } from 'client/react/actions/facebook';

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        signup
    }, dispatch)
);


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);