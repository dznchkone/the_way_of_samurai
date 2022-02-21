import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import User from "../../User";


const DialogsItem = ({name, id}) => {//Деструктурируем пропсы сразу на переменные, т.к. знаем что придет в компонент.

    return (
        <div className={s.dialogs_item}>
            <User size={'s'} name={''}/>
            <div className={s.dialogs_item_link_wrapper}>
                <NavLink  to={`/dialogs/${id}`}>
                    {name}
                </NavLink>
            </div>


        </div>
    )
}


export default DialogsItem;