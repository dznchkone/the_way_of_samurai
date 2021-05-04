import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogsItem = ({name, id}) => {//Деструктурируем пропсы сразу на переменные, т.к. знаем что придет в компонент.

    return (
        <div key={id} className={s.dialogs_item}>
            <NavLink to={`/dialogs/${id}`}>
                {name}
            </NavLink>
        </div>
    )
}


export default DialogsItem;