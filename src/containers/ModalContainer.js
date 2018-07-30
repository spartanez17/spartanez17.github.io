import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions'

/** Modal Components */
import EndOfGameModal from './EndOfGameModalContainer';
import ScoreModal from './ScoreModalContainer';

// const END_OF_GAME_MODAL = "END_OF_GAME_MODAL";
// const SCORE_MODAL = "SCORE_MODAL";

const MODAL_COMPONENTS = {
    END_OF_GAME_MODAL: EndOfGameModal,
    SCORE_MODAL: ScoreModal
};

const ModalContainer = (props) => {
    if (!props.modalType) {
        return null;
    }
    const SpecificModal = MODAL_COMPONENTS[props.modalType];
    return <SpecificModal />;
};

const mapStateToProps = state => {
    return {
        modalType: state.modal.modalType
    };
};

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalContainer);