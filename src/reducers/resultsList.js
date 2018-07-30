import { ADD_RESULT, CHANGE_RESULTS_LIST } from '../actions'


const resultsList = (state = [], action) => {
    switch (action.type) {
        case ADD_RESULT:
            if (state[state.length - 1].time > action.result.time) {
                let firstName = action.result.firstName || '';
                let lastName = action.result.lastName === undefined ? '' : ' ' + action.result.lastName;
                let newResult = {
                    username: firstName + lastName,
                    email: action.result.email,
                    time: action.result.time,
                }
                sendResult(newResult);
                return insertResult(state, newResult);
            }
            return state;
        case CHANGE_RESULTS_LIST:
            return action.list;
        default:
            return state;
    }
}

function insertResult(resultsList, result) {
    let arr = [...resultsList];
    arr.push(result);
    arr.sort((a, b) => a.time - b.time);
    return arr.slice(0, 10);
}

function sendResult(result) {
    let opts = {
        username: result.username,
        email: result.email,
        score: result.time,
    }
    let myInit = {
        headers: {
            'Content-Type': "application/json",
        },
        method: 'POST',
        body: JSON.stringify(opts),
    }
    let request = new Request('http://mmg-score.herokuapp.com', myInit);
    fetch(request);
}

export default resultsList;
