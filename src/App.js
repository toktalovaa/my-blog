import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import News from './pages/News/News';
import NotFound from './pages/NotFound/NotFound';
import Catalog from './pages/Catalog/Catalog';
import Iphone from './pages/Iphone/Iphone';
import MacBook from './pages/MacBook/MacBook';


function App() {
  return (
    <>
       <Header/>
       <BrowserRouter>
       <Routes>
          <Route path='/' element={<Main pageName="Главная станица"/>}/>
          <Route path='/about' element={<About text="Информация о нас"/>}/>
          <Route path='/contacts' element={<Contacts number="СВЯЖИТЕСЬ С НАМИ"/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/catalog' element={<Catalog/>}>
            <Route path='/Iphone' element={<Iphone/>}/>
            <Route path='/MacBook' element={<MacBook/>}/>
          </Route>

          <Route path='*' element={<NotFound text="Страница не найдена"/>}/>
       </Routes>
       </BrowserRouter>    
    </>
  )
}


export default App;

