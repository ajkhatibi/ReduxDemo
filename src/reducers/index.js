import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import Selection from './Selection';

export default combineReducers({
    LibraryReducer,
    Selection
});
