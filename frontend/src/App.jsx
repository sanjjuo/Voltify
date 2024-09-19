import React from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppNavbar from './Components/Navbar/Navbar';
import Category from './Components/Category/Category';
import Category2 from './Components/Category/Category2';
import Services from './Components/Services/Services';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Products from './Components/Products/Products';
import Banner2 from './Components/Banner/Banner2';
import News from './Components/News/News';
import Partners from './Components/Partners/Partners';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <AppNavbar />
      <Header />
      <Category />
      <Category2 />
      <Services />
      <Banner />
      <Products />
      <Banner2/>
      <News/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default App
