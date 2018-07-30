import { SHOW_MODAL, HIDE_MODAL } from '../actions';

const initialModalState = {
  modalType: null,
}

const modal = (state = initialModalState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case SHOW_MODAL:
      newState.modalType = action.modalType;
      break;

    case HIDE_MODAL:
      return initialModalState;

    default:
      return state;
  }

  return newState;
}

export default modal;