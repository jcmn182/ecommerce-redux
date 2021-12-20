//components
import {About} from './components/About.jsx';
import {Contact} from './components/Contact.jsx';
import {Header} from './components/Header.jsx';
import {SingleProduct} from './components/SingleProduct.jsx'
import {Footer} from './components/Footer.jsx';
import {Home} from './components/Home.jsx';
// react router dependencies
import { Routes,Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/*<Route path="/" element={<Navigate replace to="/home" />} />*/}
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="product/:productId" element={<SingleProduct/>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
            }
        />
      </Routes>
    <Footer/>  
    </>
  );
}

export default App;
