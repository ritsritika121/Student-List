import { combineReducers } from 'redux';
import ListReducer from './ListReducer';
import ShowDetails from './showDetails';

export default combineReducers({ 
    StudentList: ListReducer, 
    ShowDetails: ShowDetails
});