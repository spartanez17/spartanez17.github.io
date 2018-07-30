import { connect } from 'react-redux'
import { hideModal} from '../actions'
import ScoreModal from '../components/ScoreModal'

const mapStateToProps = state => {
    return {
        modalType: state.modal.modalType,
        resultsList: state.resultsList,
    };
};

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal()),
})

const ScoreModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreModal);

export default ScoreModalContainer;