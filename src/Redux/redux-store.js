import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    Sidebar: sidebarReducer,
})

let store = createStore(reducers);

export default store;