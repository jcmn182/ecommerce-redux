//react-router
import { Link } from "react-router-dom"
// react bootstrap
import { Button } from 'react-bootstrap'
// redux hooks
import {useSelector} from 'react-redux';

export const Cartbtn = () => {
    const {cart} = useSelector(state => state.cart);
    const products = cart.length
    return (
        <>
            <Button variant="outline-dark none-style-a m-2 border">
                <Link to="/bag" className="d-flex align-items-center">
                    <span className="fa fa-shopping-bag me-1"></span> {products>0?products:null}
                </Link>
            </Button>
        </>
    )
}
