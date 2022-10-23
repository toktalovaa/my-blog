import React, { useState , useEffect} from "react";
import styles from "./Watches.module.css";

const Watches=() => {
    const [watches, setWatches]= useState();

    useEffect(() => {
      fetch('http://localhost:3000/apple-watch')
      .then(response => {
        console.log(response)   //проверка статуса
        return response.json()})
        .then(data => setWatches(data))
    },[])
    

    return(
        <div>
        <h1 className={styles.watches}>Здесь часы</h1>
        {
            watches.map(item => 
                <div className={styles.watch_card}>
                    <img src={item.image} alt=""/>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                    <p>{item.description}</p>
                </div>
            )
        }
        </div>
    )
}

export default Watches;