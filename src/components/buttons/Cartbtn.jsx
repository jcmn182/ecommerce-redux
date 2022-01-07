// redux
import {useSelector} from 'react-redux';
// react router
import { Link } from "react-router-dom"
// react bootstrap
import { Button } from 'react-bootstrap'

export const Cartbtn = () => {
    const {cart} = useSelector(state => state.cart)
    
    const products = cart.length;
    return (
        <>
            <Button variant="light none-style-a m-2  responsive-padding btn-cart-responsive">
                <Link to="/bag" className="d-flex align-items-center">
                    <span className="fa fa-shopping-cart me-1 "></span> {products>0?products:null}
                </Link>
            </Button>
        </>
    )
}
