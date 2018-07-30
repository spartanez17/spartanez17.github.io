import { combineReducers } from 'redux';
import profile from './profile';
import difficulty from './difficulty';
import gameProgress from './card';
import modal from './modal';
import time from './timer';
import resultsList from './resultsList';
import skirt from './skirt';

const reducer = combineReducers({
  profile,
  difficulty,
  skirt,
  gameProgress,
  modal,
  time,
  resultsList,
});

export default reducer;
