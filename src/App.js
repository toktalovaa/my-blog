import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import NotFound from './pages/NotFound/NotFound';
import Catalog from './pages/Catalog/Catalog';
import Iphone from './pages/Iphone/Iphone';
import Product from './pages/Product/Product';
import Watches from './pages/Watches/Watches';
import Products from './pages/Admin/Products/Products';
import IphoneAdmin from './pages/Admin/IphoneAdmin/IphoneAdmin';


function App() {
  return (
       <BrowserRouter>
            <Header/>
       <Routes>
          <Route path='/' element={<Main pageName="Главная станица"/>}/>
          <Route path='/about' element={<About text="Информация о нас"/>}/>
          <Route path='/contacts' element={<Contacts text="СВЯЖИТЕСЬ С НАМИ"/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/catalog/iphone' element={<Iphone/>}/>
          <Route path='/catalog/apple-watch' element={<Watches/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/admin/add-products' element={<Products/>}/>
          <Route path='/admin/iphone' element={<IphoneAdmin/>}/>

          <Route path='*' element={<NotFound text="Страница не найдена"/>}/>
       </Routes>
       <Toaster/>
       </BrowserRouter>    
  )
}


export default App;

