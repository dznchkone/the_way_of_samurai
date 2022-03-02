import React from "react";

import style from "./Preloader.module.css"
import preloader_svg from "../../../assets/img/loader.svg";


const Preloader = (props) => {
    return (
        <div className={style.modal_box}>
            <img className={style.loader} src={preloader_svg} alt='loading...'/>
        </div>
    )
}

export default Preloader;