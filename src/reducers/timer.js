import { SET_TIME, RESTART } from '../actions'

function time(state = 0, action) {
    switch (action.type) {
        case SET_TIME:
            return action.time;
        case RESTART:
            return -1;
        default:
            return state
    }
}

export default time;