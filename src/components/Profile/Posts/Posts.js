import React from "react";
import Post from "./Post";
import s from "./PostsWrapper.module.css"



const Posts = (props) => {

    const {posts, newPostText} = props;
    const postsElements = posts.sort((a,b)=>b.id-a.id).map(({id, text, likesCount}) => <Post key={id} text={text} likesCount={likesCount} photo={props.photo}/>);

    
    let postText = React.createRef();
    
    const addPost = () => {
        props.addPost();
    }

    const onChangeValue = (e) => {
        props.updateNewPostText(e.target.value)

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

export default Posts