import {combineReducers, legacy_createStore as createStore} from 'redux';
import newColorReducer from './newColor-reducer';
import profileReducer from './profile-reducer';
import massagesReducer from './submitMassage-reducer';

let redusersList = combineReducers(
  {
    profilePage: profileReducer,
    chatsPage: massagesReducer,
    decorColor: newColorReducer
  }
);
let store = createStore(redusersList);
window.store = store;

export default store;