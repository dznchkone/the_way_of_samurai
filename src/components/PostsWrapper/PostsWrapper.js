import React from "react";
import Post from "../Post";


import s from "./PostsWrapper.module.css"



const PostsWrapper = ()=> {
    return (
        <div className={s.container}>
            <p className={s.heading}>My posts</p>
            <div>
                <textarea className={s.textarea}/>
                <button className={s.add_post}>Создать</button>
            </div>
            <div>
                <Post message='Hi, how are you?' id={1} likes={10}/>
                <Post message={`It's my first message`} id={2} likes={15}/>
            </div>
        </div>
    )
}

export default PostsWrapper