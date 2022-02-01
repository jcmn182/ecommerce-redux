//hooks
import {useState,useEffect} from 'react'
// redux hooks
import {useDispatch,useSelector} from 'react-redux';
// react router 
import { Link } from "react-router-dom";
//bootstrap
import {Button, Offcanvas, Spinner} from 'react-bootstrap'
// components
import {FormAddres} from '../forms/FormAddres.jsx';
import {Payment} from '../forms/Payment.jsx';
//actions
import {removeFromCart, addQty, cleanCart} from '../../redux/actions/cart.actions.js'

export const Cart = () => {

    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cart);
    const [show, setShow] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checking, setChecking] = useState(true)
    const [total, setTotal] = useState()

    //side effects

    useEffect(() => {
        setTotal(cart.reduce((acc,curr) => acc + Number(curr.price)* curr.qty, 0 ))
     }, [cart])
  
    //handle functions
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const handleCloseNext = () => setShowNext(false);
    const toggleShowNext = () => setShowNext((s) => !s);
    const handlerLoader = () => setChecking(false);
    const handlechecking = () => {
        setChecked(true)
        setTimeout(handlerLoader, 3000)
    }

    const resetStates = () => {
        setShow(false)
        setShowNext(false)
        setChecked(false)
        setChecking(true)
    }
    // redux actions
    const handleRemoveCart = (id) =>{
        dispatch(removeFromCart(id))
    }

    const handleQty = (value,id) =>{
        dispatch(addQty(value,id))
    }

    const handleCleanCart = (id) =>{
        dispatch(cleanCart())
    }
  

    return (

        <>
        {
            cart.length===0 && checked===false?
            <>
            <div className="w-100 hv-75 d-flex justify-content-center flex-column 
                align-items-center text-size-5"><span className="fa fa-thumbs-down"></span>
                <p className="text-size-3 pt-3">Your shopping cart is empty</p> 
                <p className="text-size-2 none-style-a">There's something awesome waiting for you   
                   <Link to="/" className="button-w text-danger"> HERE!</Link></p> 
                </div>
            </>:
            <>
                <div className="d-flex align-items-center flex-column">
                        <p className="font-weight-bold text-size-4 pt-3">Your Shopping cart has {cart.length} {cart.length>1?"items":"item"}</p>
                        <p className="font-weight-light text-size-3">Pay and get free shiping</p>
                        <div className="items-shoping-cart d-flex align-items-center flex-column w-75  border-bottom">
                            
                        {cart?.map( item => {
                            return (
                                <div className="d-flex justify-content-between mb-5 w-100" key={item.id}> 
                                    <div className="d-flex">    
                                        <img src={item.image} alt={item.title} className="shopping-cart-list-img"/>
                                        <div className="p-4">
                                            <p className="text-size-2">{item.title}</p>
                                            <p>$ {item.price}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column pt-4">
                                    {
                                        item.inStock===0? null:
                                        <select value={item.qty} onChange={(e)=>{handleQty(e.target.value, item.id)}}>
                                                                {[...Array(10).keys()].map((x) => (
                                                                    <option key={x + 1}>{x + 1}</option>
                                                                ))}
                                        </select>
                                    }
                                        <div onClick={()=>handleRemoveCart(item.id)} className="pointer d-flex flex-row-reverse pt-2"> 
                                            <span className="fa fa-trash-o "></span> 
                                        </div>
                                    </div>
                                </div>
                                )})
                            }

                        </div>
                        <div className=" d-flex justify-content-end w-75 pt-3">
                            <div className="d-flex flex-column">
                                <p className="text-size-3 pt-1"> Total: $ {total}</p>
                                <Button variant="outline-dark" onClick={toggleShow}>Pay</Button>
                            </div>
                        </div>
                    </div>
                <Offcanvas show={show}  className="w-100">
                    <div className="w-100 d-flex justify-content-end position-absolute right-1 top-1 text-size-4">
                        <div onClick={handleClose} className="pointer"><span className="fa fa-angle-left"></span> </div>
                    </div>
                <Offcanvas.Header >
                    <Offcanvas.Title className="p-4 text-size-4">Where we should send your purchase?</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="px-5">
                    <div className="pay-view d-flex flex-column w-100  border-bottom">
                        <FormAddres/>
                    </div>
                    <div className=" d-flex justify-content-end w-100 pt-4">
                            <div className="d-flex flex-column">
                                <Button variant="outline-dark" onClick={toggleShowNext}>Next</Button>
                            </div>
                    </div>
                </Offcanvas.Body>
                </Offcanvas>
                <Offcanvas show={showNext}  className="w-100">
            {!checked? (
                <div>
                    <div className="w-100 d-flex justify-content-end position-absolute right-1 top-1 text-size-4">
                        <div onClick={handleCloseNext} className="pointer"> <span className="fa fa-angle-left"></span> </div>
                    </div>
                    <Offcanvas.Header >
                        <Offcanvas.Title className="pt-4 px-4 text-size-4">Payment</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="px-5 d-flex flex-column align-items-center">
                        <div className="pay-view-1 d-flex w-100">
                            <Payment/>
                        </div>
                        <div className="w-100 pt-3">
                            <Button variant="outline-dark pay-size mt-5"
                            onClick={()=>{
                                handlechecking(); handleCleanCart();
                                }}>Buy</Button>
                        </div>   
                    </Offcanvas.Body>
                </div>):
                (
                checking? 
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                    <Spinner animation="grow" size="xxl"/>
                </div>
                :
                <div className="w-100 h-100 d-flex justify-content-center flex-column 
                align-items-center d-flex">
                    <p className="text-size-5 p-0"> Done! </p>
                    <Button variant="outline-dark pay-size mt-1 button-w none-style-a w-b-50"
                        onClick={resetStates}> 
                        <Link to="/">Go to main page</Link> 
                    </Button>
                </div>
                ) }
            </Offcanvas>  
            </>
        }
        </>
    )
}


