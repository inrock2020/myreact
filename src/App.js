import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    // debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav state = {props.state.Sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile
                                                                   store = {props.store}
                                                                   // dispatch = {props.dispatch}
                                                                   // state = {props.state.ProfilePage}
                                                                   // state = {props.store.getState().ProfilePage}
                                                                   // addPost = {props.addPost}
                                                                   // changePost = {props.changePost}
                                                                   />}
                    />
                    <Route path='/dialogs' render={ () => <DialogsContainer
                                                                    store = {props.store}
                                                                    // state = {props.state.DialogsPage}
                                                                    //dispatch = {props.dispatch}
                                                                    />}
                    />
                                                                   {/*updateMessage = {props.updateMessage}*/}
                                                                   {/*addMessage = {props.addMessage} /> }/>*/}
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
