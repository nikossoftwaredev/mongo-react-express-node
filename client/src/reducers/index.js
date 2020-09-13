import ui from './ui';
import api from './api';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ ui, api });

export default rootReducer;
