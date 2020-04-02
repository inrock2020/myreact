import React from "react";
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}><a href="#">Profile</a></li>
                <li className={`${s.item} ${s.active}`}><a href="#">Messages</a></li>
                <li className={s.item}><a href="#">News</a></li>
                <li className={s.item}><a href="#">Music</a></li>
                <li className={s.item}><a href="#">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav;