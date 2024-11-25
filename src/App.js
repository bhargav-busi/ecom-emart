import React from 'react';
import ProductSlider from './Components/ProductSlider';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ServicePage from './Components/ServicePage';
import Header from './Components/Header';

const App = () => (
  <>
    <Header/>
    <ProductSlider />
    <ServicePage />
    <Home />
    <Footer />
  </>
);

export default App;
