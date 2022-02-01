//components
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
              </Button>
            </main>
            }
        />
        </Route>
      </Routes>
    </>
  );
}

export default App;
