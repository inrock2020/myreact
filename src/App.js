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
    // debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav state = {props.state.Sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile
                                                                    dispatch = {props.dispatch}
                                                                   state = {props.state.ProfilePage}
                                                                   // addPost = {props.addPost}
                                                                   // changePost = {props.changePost}
                                                                   />}
                    />
                    <Route path='/dialogs' render={ () => <Dialogs state = {props.state.DialogsPage}
                                                                   dispatch = {props.dispatch}/>}/>
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
