import {connect} from "react-redux";
import Posts from "./Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const mapStateToProps = (state)=>{
    return {
        state: state.profilePage
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