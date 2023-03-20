import { combineReducers, createStore } from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_reducer";
import sidebarReducer from "./sidebar_reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage:  dialogReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;