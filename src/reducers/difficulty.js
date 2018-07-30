import {SET_DIFFICULTY, Difficulties} from '../actions'

function difficulty(state = Difficulties.EASY, action) {
    switch (action.type) {
      case SET_DIFFICULTY:
        return action.difficulty;
      default:
        return state
    }
  }

  export default difficulty;