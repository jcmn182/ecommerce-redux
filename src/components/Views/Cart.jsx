import {useState} from 'react'
//fake data base 
import products from '../../db/fakeDB.js';
// react router dependencies
import { Link } from "react-router-dom";
//bootstrap
import {Button, Offcanvas, Spinner} from 'react-bootstrap'
// components
import {FormAddres} from '../forms/FormAddres.jsx';
import {Payment} from '../forms/Payment.jsx';
export const Cart = () => {

    const [show, setShow] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checking, setChecking] = useState(true)
  
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
  

    const productsOne = products[1];
    const productsTwo = products[2];
    const productsThree = products[3];
    const productsFour = products[4]

    return (
        <>
            <div className="d-flex align-items-center flex-column">
                <p className="font-weight-bold text-size-4 pt-3">Your Shopping cart has four items</p>
                <p className="font-weight-light text-size-3">Pay and get free shiping</p>
                <div className="items-shoping-cart d-flex align-items-center flex-column w-75  border-bottom">
                    <div className="d-flex mb-5 w-100">
                        <img src={productsOne.img} alt={productsOne.name} className="shopping-cart-list-img"/>
                        <div className="p-4">
                            <p className="text-size-2">{productsOne.name}</p>
                            <p>$ {productsOne.price}</p>
                        </div>
                    </div>
                    <div className="d-flex mb-5 w-100">
                        <img src={productsTwo.img} alt={productsTwo.name} className="shopping-cart-list-img"/>
                        <div className="p-4">
                            <p className="text-size-2">{productsTwo.name}</p>
                            <p>$ {productsTwo.price}</p>
                        </div>
                    </div>
                    <div className="d-flex mb-5 w-100">
                        <img src={productsThree.img} alt={productsThree.name} className="shopping-cart-list-img"/>
                        <div className="p-4">
                            <p className="text-size-2">{productsThree.name}</p>
                            <p>$ {productsThree.price}</p>
                        </div>
                    </div>
                    <div className="d-flex mb-5 w-100">
                        <img src={productsFour.img} alt={productsFour.name} className="shopping-cart-list-img"/>
                        <div className="p-4">
                            <p className="text-size-2">{productsFour.name}</p>
                            <p>$ {productsFour.price}</p>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-end w-75 pt-3">
                    <div className="d-flex flex-column">
                        <p className="text-size-3 pt-1"> Total: $ 415</p>
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
                        <Button variant="outline-dark pay-size mt-5" onClick={handlechecking}>Buy</Button>
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
            align-items-center none-style-a">
                <p className="text-size-5 p-0"> Done! </p>
                <Link to="/">
                    <Button variant="outline-dark pay-size mt-1 button-w"
                        onClick={resetStates}> 
                        Go to main page
                    </Button>
                </Link>
            </div>
            ) }
        </Offcanvas>
        </>
    )
}


