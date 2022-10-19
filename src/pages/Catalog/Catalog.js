import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Catalog.module.css"
 

const title={
    TextAlign:'center'
}

const Catalog= ()=>{
    return(
        <div>
     <h1 style={title}>Catalog</h1>
     <Outlet/>
        </div>
    )
}

export default Catalog;