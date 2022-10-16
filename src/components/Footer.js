import React from "react";

const style_title = {
    textAlign:"center",
    color:"darkblue",
    fontSize:"25px"
}
const style_link ={
    fontSize:"20px",
    textTransform:"uppercase"
}

const Footer =()=>{
    return(
 <>
    <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
        <p style={style_title}>
        Powered by{" "}
        <a style={style_link} href="https://www.w3schools.com/w3css/default.asp" target="blank">
            w3.css
        </a>
        </p>
    </footer>
</>


    )
}

export default Footer;