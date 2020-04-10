import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import state from "./Redux/State";
import {addMessage, addPost, changePost, updateMessage} from "./Redux/State";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state = {state}
                 addPost = {addPost}
                 changePost = {changePost}
                 updateMessage = {updateMessage}
                 addMessage = {addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
