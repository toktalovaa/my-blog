import React from 'react';
import './App.css';
import BlogEntries from './components/BlogEntries';
import Header from './components/Header';
import IntroductionMenu from './components/IntroductionMenu';
import Footer from './components/Footer';

function App() {
  return (
      <>
      <div className="w3-content" style={{ maxWidth: 1400 }}>
        <Header/>
        <div className='w3-row'>
          <BlogEntries/>
        <IntroductionMenu/>
        </div>
        <Footer/>
      </div>
      </>
  )
}

export default App;

