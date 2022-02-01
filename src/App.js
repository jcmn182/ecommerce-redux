//components
<<<<<<< HEAD
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
=======
import {CardProducts} from './components/containers/CardProducts.jsx';
import {Home} from './components/pages/Home.jsx';
import {Cart} from './components/pages/Cart.jsx';
import {MainLayOut} from './components/containers/MainLayOut.jsx'
import {SingleProduct} from './components/pages/SingleProduct.jsx';
// react router 
import { Routes,Route, Link} from "react-router-dom";
// redux
import {useSelector} from 'react-redux';
//bootstrap
import {Button} from 'react-bootstrap'

function App() {
  const {sectionOne,sectionTwo,sectionThree,sectionFour} = useSelector(state => state.FakeApi)
  return (
    <>
>>>>>>> redux/thunk
      <Routes>
        <Route element={ <MainLayOut/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/bag" element={<Cart/>} />
        <Route path="/electronics" element={<CardProducts products={sectionOne}/>} />
        <Route path="/jewelery" element={<CardProducts products={sectionTwo}/>} />
        <Route path="/men" element={<CardProducts products={sectionThree}/>} />
        <Route path="/women" element={<CardProducts products={sectionFour}/>} />
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
<<<<<<< HEAD
                </Button>
=======
              </Button>
>>>>>>> redux/thunk
            </main>
            }
        />
        </Route>
      </Routes>
<<<<<<< HEAD
    <Footer/> 
    </div>):(
      <div className="w-100 hv-100 d-flex justify-content-center align-items-center">
        <Spinner animation="grow" size="xxl"/>
      </div>
    )}
    </div>
=======
    </>
>>>>>>> redux/thunk
  );
}

export default App;
