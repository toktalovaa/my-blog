import React from 'react';
import s from './Checkout.module.css';

const Checkout = () => {

    const saveOrder=(e)=>{
        e.preventDefault();
        const orderList = JSON.parse(localStorage.getItem('cart'));
        const data ={
        name:e.currentTarget.userName.value,
        address:e.currentTarget.userAddress.value,
        order:orderList
       }
      const options={
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      }
      const url="http://localhost:3000/orders";

      fetch(url,options)
      .then(response=>{
        if(response.ok){
            alert("Ваш заказ успешно оформлен. Ожидайте.");
        }else{
            alert("Ошибка");
        }
      })
    }

  return (
    <div className={s.container}>
        <h1>Оформление заказа </h1>
        <form onSubmit={saveOrder} action='#'>
            <div>
                <input type="text" name='userName' placeholder='Введите имя' />  
            </div>
            <div>
                <input type="text" name='userAddress' placeholder='Введите адрес' />
            </div>
            <div>
                <button type='submit'>Потвердить заказ</button>
            </div>

        </form>
    </div>
  )
}

export default Checkout