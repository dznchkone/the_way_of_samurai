import React from "react";
import Post from "./Post";


import s from "./PostsWrapper.module.css"


const PostsWrapper = () => {

    const postsData = [
        {id: 5, text: 'Hi, how are you?', likesCount: 10},
        {id: 4, text: 'It\'s my fours message', likesCount: 15},
        {id: 3, text: 'It\'s my third message', likesCount: 15},
        {id: 2, text: 'It\'s my second message', likesCount: 22},
        {id: 1, text: 'It\'s my first message', likesCount: 3},
    ];

    const postsElements = postsData.map(({id, text, likesCount}) => <Post id={id} text={text} likesCount={likesCount}/>);

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