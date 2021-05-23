import React from "react";
import Post from "./Post";


import s from "./PostsWrapper.module.css"


const PostsWrapper = ({posts}) => {


    const postsElements = posts.map(({id, text, likesCount}) => <Post id={id} text={text} likesCount={likesCount}/>);

    return (
        <div className={s.container}>
            <p className={s.heading}>My posts</p>
            <div className={s.add_post_wrapper}>
                <textarea maxLength="200" className={s.textarea}/>
                <button className={s.add_post_button}>Send</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default PostsWrapper