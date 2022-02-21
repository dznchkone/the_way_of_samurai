import React, {useEffect} from "react";
import User from "../User";
import axios from "axios";

import s from './Users.module.css'




const Users = (props) => {

    /*const setUsers = () => {

    }*/

    useEffect(()=>{
        if (props.state.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => res.data)
                .then(data => props.setUsers(data.items));
        }
    })

    return(
        <div className={s.users_wrapper}>
            {/*<button onClick={setUsers}>add users</button>*/}
        {props.state.map(user=>{
            return (
                <div key={user.id} >
                    <User size={'m'} user_image={user.photos.small} name={user.name}>
                        <button onClick={()=>props.toggleFollow(user.id)}>{user.followed ? 'unfollow': 'follow'}</button>
                    </User>
                </div>
            )
        })}
    </div>)
}

export default Users;