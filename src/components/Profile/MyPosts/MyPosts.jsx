import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let PostElements = props.PostData.Posts.map( el => <Post message = {el.message} like ={el.like}/> )

    let newPostElement = React.createRef();
    let addPost = () => {
        alert(newPostElement.current.value)
    }




    return (
        <div>
            my posts
            <div><textarea ref={newPostElement}></textarea></div>
            <div><button onClick={ addPost }>Add Post</button></div>
            {PostElements}
        </div>
    )
}

export default MyPosts;