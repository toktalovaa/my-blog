import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {iphones} from "../../constants/iphones"
import styles from "./Product.module.css"


const Product = () => {
 const params = useParams();
 const [searchPararms, setSearchPararms] = useSearchParams();
 const product = iphones.find(elem => elem.id === +params.id)
 
   if(iphones === undefined)
        return <h2>Товар не найден</h2>
   else{
        return(
        <div className={styles.container}>
            <div >
             <img src={product.image} alt=""/>
            </div>
            <div className={styles.info}>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
                <p className={styles.quantity}>
                    {+searchPararms.get('quantity')=== 0? 'нет в наличии':'товар в наличии'}</p>
            </div>        
        </div>
      )
    };
    
};


 export default Product;
