import React from "react";
import styles from "./NotFound.module.css"
    
const NotFound=(props)=>{
    return(
        <div className={styles.not_found_title}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default NotFound;