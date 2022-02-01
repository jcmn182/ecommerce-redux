//components
import {CardProducts} from './components/containers/CardProducts.jsx';
import {Home} from './components/pages/Home.jsx';
import {Cart} from './components/pages/Cart.jsx';
import {MainLayOut} from './components/containers/MainLayOut.jsx'
import {SingleProduct} from './components/pages/SingleProduct.jsx';
// react router 
import { Routes,Route } from "react-router-dom";
// redux
import {useSelector} from 'react-redux';

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
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
            }
        />
        </Route>
      </Routes>
    </>
  );
}

export default App;
