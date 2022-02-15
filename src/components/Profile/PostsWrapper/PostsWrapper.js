import React from "react";
import Post from "./Post";


import s from "./PostsWrapper.module.css"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";




const PostsWrapper = (props) => {

    const {posts, dispatch, newPostText} = props;
    const postsElements = posts.sort((a,b)=>b.id-a.id).map(({id, text, likesCount}) => <Post key={id} text={text} likesCount={likesCount}/>);

    
    let postText = React.createRef();
    
    const addPost = () => {
        dispatch(addPostActionCreator());
    }

    const onChangeValue = (e) => {
        let text = e.target.value;
        dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.container}>
            <p className={s.heading}>My posts</p>
            <div className={s.add_post_wrapper}>
                <textarea maxLength="200" className={s.textarea} ref={postText} value={newPostText} onChange={onChangeValue}/>
                <button className={s.add_post_button} onClick={addPost}>Send</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default PostsWrapper