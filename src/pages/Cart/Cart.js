    import React, { useEffect, useState } from 'react';
    import { Link } from 'react-router-dom';
    import s from './Cart.module.css'

    const Cart = () => {
        const [goods, setGoods]= useState([]);

        const getProducts= ()=>{
            const goods =JSON.parse(localStorage.getItem('cart'));
            setGoods(Object.values(goods));
        }

        const changeCount=(e,data)=>{
            const goods =JSON.parse(localStorage.getItem('cart'));
            goods[data.id].count = +e.currentTarget.value;
            localStorage.setItem("cart", JSON.stringify(goods))
            getProducts();
        }
       const getTotalSum =()=>{
        return goods.reduce((sum, item,)=>{
            if(item.currenсy ==="$"){
                return sum + (item.count *(item.price * 85))
            }
            return sum + (item.count * item.price)
        } , 0)
       }

        useEffect(getProducts, []);

    return (
        <div className={s.container}>
            <h1>Корзина</h1>
            <table className={s.table}>
                <tr>
                    <th colSpan="2">Продукт</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>К оплате</th>
                </tr>
                {
                    goods.map(item=> {
                        return(
                            <tr>
                                <td><img src={item.image} alt=""/></td>
                                <td>{item.name}</td>
                                <td>{item.price} {item.currenсy}</td>
                                <td><input onChange={e=> changeCount(e,item)} type="number" defaultValue={item.count}/></td>
                                <td>{item.count * item.price} {item.currenсy}</td>
                            </tr>
                        )
                    })
                }
                </table>
            <div className={s.container2}>
            <h2>Итоговая сумма: <span>{getTotalSum()}</span><span>сом</span></h2>
            <Link to='/checkout'><button>Оформить заказ</button></Link>
        </div>
        </div> 

    );
    };

    export default Cart;