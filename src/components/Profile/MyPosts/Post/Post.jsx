import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            { props.message }, {props.like}
        </div>
    )
}

export default Post;