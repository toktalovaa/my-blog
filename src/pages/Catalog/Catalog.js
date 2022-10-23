import React from "react";
import { Link } from "react-router-dom";
import styles from "./Catalog.module.css"

 

const title={
    textAlign:'center'
}

const Catalog= ()=>{
    return(
        <>
            <h1 style={title}>Catalog</h1>
            <div className={styles.conteiner}>
                <Link to="/catalog/apple-watch">
                <div className={styles.catalog_card}>
                    <img src="https://www.istore.kg/media/category/watches.webp" alt=""/>
                    <h2>Watches</h2>
                </div>
                </Link>
                <Link to="/catalog/iphone">
                <div className={styles.catalog_card}>
                    <img src="https://www.istore.kg/media/category/iphones.webp" alt=""/>
                    <h2>Iphone</h2>
                </div>
             </Link>
            </div>
        </>
    );
};

export default Catalog;