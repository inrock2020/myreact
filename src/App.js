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
import {addPost} from "./Redux/State";

const App = (props) => {
    // debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav state = {props.state.Friends}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile
                                                                   store = {props.store}
                                                                   state = {props.state.ProfilePage}
                                                                   // addPost = {props.addPost}
                                                                   // changePost = {props.changePost}
                                                                   />}
                    />
                    <Route path='/dialogs' render={ () => <Dialogs state = {props.state.DialogsPage}
                                                                   store = {props.store}/>}/>
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
