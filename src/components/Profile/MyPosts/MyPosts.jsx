import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    // debugger
    let PostElements = props.posts.map( el => <Post message = {el.message} like ={el.like}/> )

    let newPostElement = React.createRef();
    let addPost = () => {
        // debugger
        // props.addPost();
        props.store.addPost()
        // props.changePost('');
        // alert(newPostElement.current.value);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.store.changePost(text);
    }

    return (
        <div>
            my posts
            {/*<div><textarea onChange={onPostChange} ref={newPostElement} /></div>*/}
            <div><textarea onChange={onPostChange} ref={newPostElement} value ={props.newPostText}/></div>
            <div><button onClick={ addPost }>Add Post</button></div>
            {PostElements}
        </div>
    )
}

export default MyPosts;