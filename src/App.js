//components
import {Header} from './components/Header.jsx';
import {SingleProduct} from './components/Views/SingleProduct.jsx'
import {Footer} from './components/Footer.jsx';
import {Home} from './components/Views/Home.jsx';
import {Cart} from './components/Views/Cart.jsx';
// react router dependencies
import { Routes,Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bag" element={<Cart/>} />
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
