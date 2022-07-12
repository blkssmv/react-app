import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer
})

let store = createStore(reducers)

window.store = store

export default store
