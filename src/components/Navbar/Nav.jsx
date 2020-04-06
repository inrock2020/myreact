import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
// import Friends from "./Friends/Friends";


const Nav = (props) => {
    // debugger
    return (
        <div className={s.nav}>
            <nav className={s.nav}>
                <ul>
                    <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                    <li className={`${s.item} ${s.active}`}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                    <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                    <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                    <li className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
                </ul>
            </nav>
            <Friends state = {props.state.FriendData}/>
        </div>
    )
}

export default Nav;