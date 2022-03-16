import {connect} from "react-redux";
import Posts from "./Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const mapStateToProps = (state)=>{
    let photo = state.profilePage.profile? state.profilePage.profile.photos.small : null;
    return {
        photo: state.profilePage.profile.photos.small,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost:() => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText:(text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}


const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;