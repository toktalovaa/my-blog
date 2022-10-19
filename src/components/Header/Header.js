import React from "react";
import styles from "./Header.module.css"

const Header=()=>{
    return(
        <div className={styles.header}>
            <ul>
                <li><a href="/">Главная станица</a></li>
                <li><a href="/about">О нас</a></li>
                <li><a href="/contacts">Контакты</a></li>
                  <li><a href="/news">News</a></li>
                  <li><a href="/catalog"></a></li>
                  <li><a href="/Iphone">News</a></li>
                  <li><a href="/MacBook">News</a></li>


            </ul>
        </div>
    )
}

export default Header; 