import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, changePostActionCreator} from "../../../Redux/profileReducer";



const MyPosts = (props) => {
    // debugger
    let PostElements = props.posts.map( el => <Post message = {el.message} like ={el.like}/> )

    let newPostElement = React.createRef();
    let onAddPost = () => {
        // debugger
        props.addPost();
        // props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        // debugger
        let text = newPostElement.current.value;
        props.changePost(text);
        // props.dispatch(changePostActionCreator(text));
    }

    return (
        <div>
            my posts
            <div><textarea onChange={onPostChange} ref={newPostElement} value ={props.newPostText}/></div>
            <div><button onClick={ onAddPost }>Add Post</button></div>
            {PostElements}
        </div>
    )
}

export default MyPosts;