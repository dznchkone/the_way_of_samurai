import React from "react";
import Post from "../Post";


import style from "./PostsWrapper.module.css"



const PostsWrapper = ()=> {
    return (
        <div className={style.container}>
            my posts
            <div>
                <textarea/>
                <button>Создать</button>
            </div>
            <div>
                <Post id={1}/>
                <Post id={2}/>
            </div>
        </div>
    )
}

export default PostsWrapper