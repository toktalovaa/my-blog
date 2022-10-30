import React, { useEffect, useState } from "react";
import  { toast } from "react-hot-toast";
import styles from "./Iphone.module.css";


const Iphone = () => {

    const [iphones, setPhones]= useState([]);
    
    const getIPhones = () => {
        const url = "http://localhost:3000/iphones";

        fetch(url)
            .then(response => {
                if(response.status === 200){
                return response.json()
                } else{
                    toast.error('Произошла ошибка. Статус ошибки'+ response.status)
                }
            })
            .then(data => setPhones(data))
        }

const getProduct= (data)=> {
    const id = data.id;
    let cart= JSON.parse(localStorage.getItem('cart')) || {};
       cart[id]={ ...data, count:1}

    localStorage.setItem('cart', JSON.stringify(cart))
}

useEffect( () => {
        getIPhones()
    }, [])
 
    return(
        <div>
            <h1 className={styles.iphone}> Айфоны</h1>
            <div className={styles.product_conteiner}>
            {
                iphones.map(item => {
                    return (
                    <div key={item.id} className="product_card">
                        <img src={item.image} alt=""/>
                        <h3>{item.name}</h3>
                        <h4>{item.price} {item.currenсy}</h4>
                        <button onClick={() => getProduct(item)}>Купить</button>
                    </div>
                )
              })
            }
         </div>        
    </div>
    );
};

export default Iphone;