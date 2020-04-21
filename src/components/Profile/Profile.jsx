import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    // debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store = {props.store}
                     // posts = {props.state.Posts}
                     // newPostText = {props.state.NewPostText}
                     // addPost = {props.addPost}
                     // changePost = {props.changePost}
                     // dispatch = {props.dispatch}
            />
        </div>
    )
}

export default Profile;