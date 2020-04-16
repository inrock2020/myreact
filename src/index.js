// import state, {subscribe} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
// import store from "./Redux/store";


let rerenderEntireTree = (state) => {
    // debugger
    ReactDOM.render(
        <React.StrictMode>
            <App
                 store = {store}
                 dispatch = {store.dispatch.bind(store)}
                 state = {store.getState()}/>
                 {/*addPost = {addPost}*/}
                 {/*changePost = {changePost}*/}
                 {/*updateMessage = {updateMessage}*/}
                 {/*addMessage = {addMessage}/>*/}
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

