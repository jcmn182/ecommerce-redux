// router
import { Link } from "react-router-dom";
//actions
import {addProduct} from '../redux/actions/cart.actions.js';
// redux hooks
import {useSelector, useDispatch} from 'react-redux';
// bootstrap
import { Card, Button } from 'react-bootstrap'

export const CardProduct = () => {

   const dispatch = useDispatch()     
   const {products, sort, byFastDelivery} = useSelector(state => state.getData)
   

   // redux actions
   const handleAddProduct = (item) =>{
       dispatch(addProduct(item))
   }

   const filterProducts = () =>{

    let productsFilter = products

    if (sort){
        productsFilter = productsFilter.sort((a,b)=>
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price
        )
    }

    if (byFastDelivery){
        productsFilter = productsFilter.filter((item)=> item.fastDelivery)
    }

    return productsFilter
}
   
    return (
        <>
            {
            filterProducts()?.map( item => {
                return(
                    <div key={item.id}>
                        <Card  className="text-center m-4">
                            <div className="center" >
                            <Card.Img variant="top" src={item.img} className="img-card px-5 pt-4 pb-1"/>
                            </div>
                            <Card.Body className="text-center"> 
                                <Card.Text className="text-truncate text-size-2 mb-2">{item.name}</Card.Text>
                                <Card.Text className="text-secondary font-weight-light text-size-1 mb-2">
                                $ {item.price}
                                </Card.Text>
                                <Card.Text>{item.fastDelivery?"Fast Delivery":"2 Days Delivery"}</Card.Text>
                                <Button variant="outline-dark py-2 mb-3 w-50 text-size-button-1 none-style-a"> 
                                <Link to={`/product/${item.name}`} onClick={()=>handleAddProduct(item)}> Buy Now </Link> 
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                )})
            }
        </>
    )
}
