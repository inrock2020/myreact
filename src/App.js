import React from 'react';
import './App.css';
import Header from "./components/header";
import Nav from "./components/Nav";
import Profile from "./components/profile";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}


export default App;
