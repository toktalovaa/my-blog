import React from "react";
import s from "./Products.module.css"

const Products= ()=>{
    return (
        <div className={s.container}>
            <h1>Добавление товаров</h1>
            <form className={s.form} action="javascript:void(0)">
                <div>
                    <label htmlFor="name">Название</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor='img_url'>Адрес изображения</label>
                    <input type="text" id="img_url" />
                </div>
                <div>
                    <label htmlFor="price">Цена</label>
                    <input type="number" id="price" />
                </div>
                <div>
                    <label htmlFor="desc"> Описание </label>
                    <textarea id="desc"></textarea>
                </div>
                <div>
                    <label htmlFor="category">Категория</label>
                    <select id="category">
                        <option value="0">Выберите</option>
                        <option value="1">Iphone</option>
                        <option value="2">Watches</option>
                    </select>
                </div>
                <div>
                    <button typeof="submit">Добавить</button>
                </div>
            </form>

        </div>
    )
}

export default Products;