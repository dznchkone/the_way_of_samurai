import React, {useEffect} from 'react';
import s from "./Profile.module.css";

import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {connect} from "react-redux";
import axios from "axios";
import {setIsFetchingAC, setProfileAC} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import WithRouter from "react-router-dom/es/withRouter";


const ProfileContainer = (props) => {
    useEffect(()=>{
        let id = props.match.params.id ? props.match.params.id: 2;
        props.setIsFetchingAC(true);
            axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+id)
            .then(res=>res.data)
            .then(data=>{
                props.setProfileAC(data)
                props.setIsFetchingAC(false);
            })
    },[props.match.params.id])
    /*debugger;*/
    return (
        <>
            {props.isFetching ? <Preloader/> : (
                <div className={s.wrapper}>
                    <ProfileInfo state={props.profile}/>
                    <PostsContainer/>
                </div>
            )}
        </>


    )
}
const mapStateToProps = (state)=>({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching
})
const mapDispatchToProps = {
    setProfileAC,
    setIsFetchingAC
}

let ProfileContainerWithRouter = WithRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithRouter);
