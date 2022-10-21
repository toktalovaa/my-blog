import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {iphones} from "../../constants/iphones"
import styles from "./Product.module.css"


const Product = () => {
 const params = useParams();
 const [searchPararms, setSearchPararms] = useSearchParams();
 const prodId = +params.id;

 const phone = iphones.find(elem => elem.id === prodId)
 
   if(iphones === undefined)
        return <h2>Товар не найден</h2>
   else{
        return(
        <div className={styles.container}>
            <div >
             <img src={phone.image} alt=""/>
            </div>
            <div className={styles.info}>
                <h2>{phone.name}</h2>
                <h3>{phone.price}</h3>
                <p>{phone.description}</p>
                <p className={styles.quantity}>
                    {+searchPararms.get('quantity')=== 0? 'нет в наличии':'товар в наличии'}</p>
            </div>        
        </div>
      )
    };
    
};


 export default Product;
