import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <Post message = "first" like = "15"/>
            <Post message = "second" like ="20"/>
            <Post message = "3"/>
            <Post message = "4"/>
            <Post message = "5"/>
        </div>
    )
}

export default MyPosts;