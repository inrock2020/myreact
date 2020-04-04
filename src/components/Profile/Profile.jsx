import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img src="https://atlantis.nyc3.digitaloceanspaces.com/styled/72025f140f22a3eb32950bbb9d76e68d"/></div>
            <div>avatar + description</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;