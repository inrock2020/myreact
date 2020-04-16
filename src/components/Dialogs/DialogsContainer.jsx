import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {changeMessageActionCreator, newMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
// debugger
    let state = props.store.getState().DialogsPage;
    // let Dialog = state.Dialogs.map( el => <DialogItem name = {el.name} id={el.id} imgUrl={el.imgUrl}/> )

    // let Messages = props.store.state.Messages.map( el => <Message message = {el.message}/>)
    // let addNewMessage = React.createRef();

    // debugger


    let addMessage = () => {
        props.store.dispatch(newMessageActionCreator())
    }
    let changeMessage = (text) => {
        props.store.dispatch(changeMessageActionCreator(text));
    }
    // let changeMessage = () => {
    //     let text = addNewMessage.current.value;
    //     props.dispatch(changeMessageActionCreator(text));
    // }

    return (
        <Dialogs changeMessage = {changeMessage} addMessage = {addMessage} state = {state}/>

        // <div className={s.dialogs}>
        //     <div className={s.dialogItem}>
        //         {Dialog}
        //
        //     </div>
        //     <div className={s.messages}>
        //         {Messages}
        //         <div><textarea onChange={changeMessage} value={props.state.NewMessageText}></textarea></div>
        //         <div><button onClick={addMessage}>Add Message</button></div>
        //     </div>
        // </div>
    )
}

export default DialogsContainer;