import { PICK_CARD, UPDATE_STATUS, RESTART } from '../actions'

const initialState = {
    guessed: 0,
    pickedCards: [],
};

const gameProgress = (state = initialState, action) => {
    let nextState = {
        guessed: state.guessed,
        pickedCards: [...state.pickedCards],
    }
    switch (action.type) {
        case PICK_CARD:
            if (nextState.pickedCards.length < 2 &&
                !state.transition) {
                nextState.pickedCards.push({
                    index: action.cardInfo.index,
                    url: action.cardInfo.url,
                    status: "picked",
                });
            } else if (nextState.pickedCards.every(el => el.status === "waiting")) {
                nextState.pickedCards = [
                    {
                        index: action.cardInfo.index,
                        url: action.cardInfo.url,
                        status: "picked",
                    }
                ];
            }
            return nextState;

        case UPDATE_STATUS:
            if (nextState.pickedCards.length === 2) {
                if (nextState.pickedCards[0].url === nextState.pickedCards[1].url) {
                    nextState.pickedCards = [];
                    nextState.guessed += 2;
                } else {
                    nextState.pickedCards.forEach(el => { el.status = "waiting" });
                }
            }
            return nextState;
        case RESTART:
            nextState = state;
            return initialState;
        default:
            return state
    }
}

export default gameProgress;
