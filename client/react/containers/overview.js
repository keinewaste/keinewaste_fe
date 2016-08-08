import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Overview from '../components/overview/overview';
import { requestOverview } from 'client/react/actions/consultants';

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        requestOverview
    }, dispatch)
);

function mapStateToProps(state) {
    return {
        consultantsList: state.consultantsList
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);