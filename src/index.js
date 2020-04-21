// import state, {subscribe} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// import store from "./Redux/store";


// let rerenderEntireTree = (state) => {
    // debugger
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // store={store}
                    // dispatch={store.dispatch.bind(store)}
                    state={store.getState()}
                />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
// }

// rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

