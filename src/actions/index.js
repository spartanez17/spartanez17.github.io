export const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_SKIRT = 'SET_SKIRT';
export const PICK_CARD = 'PICK_CARD';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SET_TIME = 'SET_TIME';
export const RESTART = 'RESTART';
export const ADD_RESULT = 'ADD_RESULT';
export const CHANGE_RESULTS_LIST = 'CHANGE_RESULTS_LIST';

export const Difficulties = {
    EASY: '4',
    NORMAL: '8',
    HARD: '12',
}

export const Skirts = {
    LIGHT: 'LIGHT',
    DARK: 'DARK',
}

export function setProfileInfo(profile) {
    return { type: SET_PROFILE_INFO, profile }
}

export function setDifficulty(difficulty) {
    return { type: SET_DIFFICULTY, difficulty }
}

export function setSkirt(skirt) {
    return { type: SET_SKIRT, skirt }
}

export function pickCard(cardInfo) {
    return { type: PICK_CARD, cardInfo }
}

export function updateStatus(cardInfo) {
    return { type: UPDATE_STATUS, cardInfo }
}

export function loadModal(modalType) {
    return { type: SHOW_MODAL, modalType };
};

export function hideModal() {
    return { type: HIDE_MODAL };
};

export function setTime(time) {
    return { type: SET_TIME, time }
}

export function restart() {
    return { type: RESTART };
};

export function addNewResult(result) {
    return { type: ADD_RESULT, result };
}

export function changeResultsList(list) {
    return { type: CHANGE_RESULTS_LIST, list };
}