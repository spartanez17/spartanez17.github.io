import {SET_SKIRT, Skirts} from '../actions'

function skirt(state = Skirts.LIGHT, action) {
    switch (action.type) {
      case SET_SKIRT:
        return action.skirt;
      default:
        return state;
    }
  }

  export default skirt;