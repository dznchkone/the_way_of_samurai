import React from "react";
import Post from "../Post";


import s from "./PostsWrapper.module.css"



const PostsWrapper = ()=> {
    return (
        <div className={s.container}>
            <p className={s.heading}>My posts</p>
            <div className={s.add_post_wrapper}>
                <textarea maxLength="200" className={s.textarea}/>
                <button className={s.add_post_button}>Send</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' id={1} likes={10}/>
                <Post message={`It's my fours message`} id={2} likes={15}/>
                <Post message={`It's my third message`} id={3} likes={15}/>
                <Post message={`It's my second message`} id={4} likes={22}/>
                <Post message={`It's my first message`} id={5} likes={3}/>
            </div>
        </div>
    )
}

export default PostsWrapper