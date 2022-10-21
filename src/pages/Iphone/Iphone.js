import React from "react";
import {iphones} from "../../constants/iphones"
import styles from "./Iphone.module.css";


const Iphone=()=>{
    return(
        <div>
        <h1 className={styles.iphone}> Айфоны</h1>
        {
            iphones.map(item =>
                <div className={styles.container}>
            <div >
                <img src={item.image} alt=""/>
            </div>
            <div className={styles.info}>
                <h2>{item.name}</h2>
                <h3>{item.price}</h3>
                <p>{item.description}</p>
            </div>        
        </div>
                )
        }
        </div>
    )
}

export default Iphone;