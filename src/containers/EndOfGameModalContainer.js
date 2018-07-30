import { connect } from 'react-redux'
import { hideModal} from '../actions'
import EndOfGameModal from '../components/EndOfGameModal'

const mapStateToProps = state => {
    return {
        time: state.time,
    };
};

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal()),
})

const EndOfGameModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EndOfGameModal);

export default EndOfGameModalContainer;