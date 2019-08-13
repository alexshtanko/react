import React from 'react';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import './App.css';
import './bootstrap.min.css';
import HomePage from './components/homePage.jsx';



const App = () => {
  return (
    <div className="app-wrapper">


      <Header />
      
      <HomePage />
    

    <Footer />

    </div> //app-wrapper end here
  )
}





export default App;
