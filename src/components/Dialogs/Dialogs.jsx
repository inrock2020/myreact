import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let Dialog = props.state.Dialogs.map( el => <DialogItem name = {el.name} id={el.id} imgUrl={el.imgUrl}/> )

    let Messages = props.state.Messages.map( el => <Message message = {el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {Dialog}

            </div>
            <div className={s.messages}>
                {Messages}

            </div>
        </div>
    )
}

export default Dialogs;