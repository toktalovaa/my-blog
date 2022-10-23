import React, {useEffect, useState} from "react";
import styles from "./About.module.css"


const About = () =>{
    const [users, setUsers]= useState([]);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response)   //проверка статуса
        return response.json()})
      .then(data => setUsers(data));
   }, []);

    return(
       <div className={styles.about}>
        <h1>Станичка о нас</h1>
        {
            users.map( item =>{
                return <li>{item.name}</li>
            })
        }
       </div>
    )
}

export default About;