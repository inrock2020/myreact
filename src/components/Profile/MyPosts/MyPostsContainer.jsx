import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, changePostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    let state = props.store.getState();
    // let PostElements = props.posts.map( el => <Post message = {el.message} like ={el.like}/> )
// debugger

    // let newPostElement = React.createRef();
    let addPost = () => {
        // debugger
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        // debugger
        // let text = newPostElement.current.value;
        props.store.dispatch(changePostActionCreator(text));
    }

    return (
        <MyPosts changePost = {onPostChange} addPost = {addPost}
                 posts = {state.ProfilePage.Posts} newPostText = {state.ProfilePage.NewPostText}/>
    )
}

export default MyPostsContainer;