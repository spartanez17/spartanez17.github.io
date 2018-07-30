import { connect } from 'react-redux'
import { setDifficulty, loadModal, restart, addNewResult, changeResultsList } from '../actions'
import GameBoard from '../components/GameBoard'

const mapStateToProps = state => {
  return {
    firstName: state.profile.firstName,
    lastName: state.profile.secondName,
    email: state.profile.email,
    difficulty: state.difficulty,
    guessed: state.gameProgress.guessed,
    time: state.time,
  }
}

const mapDispatchToProps = dispatch => ({
  difficultyListener: difficulty => dispatch(setDifficulty(difficulty)),
  loadModal: modalType => dispatch(loadModal(modalType)),
  restart: () => dispatch(restart()),
  addNewResult: (result) => dispatch(addNewResult(result)),
  changeResultsList: (list) => dispatch(changeResultsList(list)),
})

const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);

export default GameBoardContainer;
