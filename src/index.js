import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./Redux/State";

// let PostData = [
//     {id: 1, message: 'first', like: '15'},
//     {id: 2, message: 'second', like: '20'},
//     {id: 3, message: 'Hello'},
//     {id: 4, message: 'foo'},
// ]
// let DialogData = [
//     {id: 1, name: 'Dima'},
//     {id: 2, name: 'Sveta'},
//     {id: 3, name: 'Sasha'},
//     {id: 4, name: 'Valera'},
//     {id: 5, name: 'Oleg'},
//     {id: 6, name: 'Igor'}
// ]
// let MessageData = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How are you'},
//     {id: 3, message: 'Hello'},
//     {id: 4, message: 'foo'},
// ]

ReactDOM.render(
  <React.StrictMode>
    <App state = {state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

