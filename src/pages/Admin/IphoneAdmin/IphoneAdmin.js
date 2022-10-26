import React, { useState, useEffect } from "react";
import s from "IphoneAdmin.module.css"
import toast from "react-hot-toast";

const IphoneAdmin =()=> {
    const [goods, setGoods]= useState([]);

    const deleteGoods = (id)=>{
        const url = "http://localhost:3000/iphones"+ id;

    }
    const options={
        method:'DELETE'
    }
    fetch(url, options)
    .then(response=>{
        if(response.ok){
            toast.success("Успешно удалено");
            getGoods();
        }else{
            toast.error("Ошибка"+response.status);
        }
    })

    const getGoods= ()=>{
        const url = "http://localhost:3000/iphones";

        fetch(url)
        .then(response => {
            if(response.ok ){
               return response.json();
            }else{
                toast.error('Произошла ошибка' +response.status)
            }
        })
        .then(data => setGoods(data))
    }

    useEffect(getGoods, [])


    return(
        <div className={s.container}>
            <table>
                <tr>
                    <tr>Изображение</tr>
                    <tr>Название</tr>
                    <tr>Цена</tr>
                    <tr>Действия</tr>
                </tr>
                {
                    goods.map(item =>{
                        return(
                        <tr>
                            <td><img src={item.image}/></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={()=>deleteGoods(item.id)}>Удалить</button>
                                <button>Редактировать</button>
                            </td>
                        </tr>
                        )
                    })
                }
            </table>
        </div>
    );
};

export default IphoneAdmin;