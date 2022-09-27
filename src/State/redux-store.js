import {combineReducers, legacy_createStore as createStore} from 'redux';
import deletePostReducer from './deletePost-reducer';
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
console.log(store)
debugger

export default store;