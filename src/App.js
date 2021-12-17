//components
import {About} from './components/About.jsx';
import {Contact} from './components/Contact.jsx';
import {Header} from './components/Header.jsx';
import {Footer} from './components/Footer.jsx';
import {Home} from './components/Home.jsx';
import {Product} from './components/Product.jsx';
// react router dependencies
import { Routes,Route, Navigate } from "react-router-dom";

import './App.css';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/*<Route path="/" element={<Navigate replace to="/home" />} />*/}
        <Route path="/products" element={<Product/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    <Footer/>  
    </>
  );
}

export default App;
