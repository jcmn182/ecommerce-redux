//components
import {Header} from './components/Header.jsx';
import {SingleProduct} from './components/Views/SingleProduct.jsx'
import {Footer} from './components/Footer.jsx';
import {Home} from './components/Views/Home.jsx';
import {Cart} from './components/Views/Cart.jsx';
// react router dependencies
import { Routes,Route, Link } from "react-router-dom";
// react dependencies
import {useEffect,useState} from 'react';
//bootstrap
import {Button,Spinner} from 'react-bootstrap'
import './App.css';

function App() {

  const [loading, setLoading] = useState(false)

  const handlerLoader = () => setLoading(true);

  useEffect(() => {
   
    const loader = () => {
      
      setTimeout(handlerLoader, 3000)
  }

  loader()

  }, [])

  return (
    <div className="w-100 h-100">{loading?
    (<div>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bag" element={<Cart/>} />
        <Route path="product/:productId" element={<SingleProduct/>} />
        <Route
          path="*"
          element={
            <main className="w-100 hv-75 d-flex justify-content-center flex-column 
            align-items-center">
              <div className="text-size-5"><span className="fa fa-chain-broken "></span></div>
              <p className="text-size-4 pt-3">There's nothing here!</p>
              <Button variant="outline-dark pay-size mt-1  w-b-50  none-style-a "> 
                    <Link to="/">Go to main page</Link> 
                </Button>
            </main>
            }
        />
      </Routes>
    <Footer/> 
    </div>):(
      <div className="w-100 hv-100 d-flex justify-content-center align-items-center">
        <Spinner animation="grow" size="xxl"/>
      </div>
    )}
    </div>
  );
}

export default App;
