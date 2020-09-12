import ui from './ui';
import api from './api';
import { combinedReducers, combineReducers } from 'redux';

const rootReducer = combineReducers({ ui, api });

export default rootReducer;
