import React from "react";
// import Iphone from "../Iphone/Iphone";
import styles from "./Catalog.module.css"
 

const title={
    textAlign:'center'
}

const Catalog= ()=>{
    return(
        <>
            <h1 style={title}>Catalog</h1>
            <div className={styles.conteiner}>
                <div className={styles.catalog_card}>
                    <img src="https://www.istore.kg/media/category/watches.webp" alt=""/>
                    <h2>watches</h2>
                </div>
                <div className={styles.catalog_card}>
                    <img src="https://www.istore.kg/media/category/iphones.webp" alt=""/>
                    <h2>Iphone</h2>
                </div>

            </div>
        </>
    );
};

export default Catalog;