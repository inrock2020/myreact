import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {changeMessageActionCreator, newMessageActionCreator} from "../../Redux/dialogsReducer";

const Dialogs = (props) => {
    let Dialog = props.state.Dialogs.map( el => <DialogItem name = {el.name} id={el.id} imgUrl={el.imgUrl}/> )

    let Messages = props.state.Messages.map( el => <Message message = {el.message}/>)
    // let addNewMessage = React.createRef();

    // debugger



    let newMessage = () => {
        props.dispatch(newMessageActionCreator())
    }
    let changeMessage = (e) => {
        let text = e.target.value;
        props.dispatch(changeMessageActionCreator(text));
    }
    // let changeMessage = () => {
    //     let text = addNewMessage.current.value;
    //     props.dispatch(changeMessageActionCreator(text));
    // }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {Dialog}

            </div>
            <div className={s.messages}>
                {Messages}
                <div><textarea onChange={changeMessage} value={props.state.NewMessageText}></textarea></div>
                <div><button onClick={newMessage}>Add Message</button></div>
            </div>
        </div>
    )
}

export default Dialogs;