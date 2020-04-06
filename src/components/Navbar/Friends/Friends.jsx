import React from "react";
import s from './Friends.module.css';
import Friend from "./Friend/Friend";


const Friends = (props) => {
    // debugger
    let newFriendData = props.state.map( el =>
        <Friend name = {el.name} imgUrl = {el.imgUrl}/>)

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div className={s.friendItem}>
                {newFriendData}
            </div>
        </div>
    )
}

export default Friends;