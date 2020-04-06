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

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav state = {props.state.Friends}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile state = {props.state.ProfilePage}/>}/>
                    <Route path='/dialogs' render={ () => <Dialogs state = {props.state.DialogsPage}/>}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
