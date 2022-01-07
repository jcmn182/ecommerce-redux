// router
import { Link } from "react-router-dom";
//actions
import {addProduct} from '../redux/actions/cart.actions.js';
// redux
import {useSelector, useDispatch} from 'react-redux';
// bootstrap
import { Card, Button } from 'react-bootstrap'

export const CardProduct = () => {

   const dispatch = useDispatch()     
   const {products} = useSelector(state => state.getData)
   // handle functions
   
   const handleAddProduct = (item) =>{
       dispatch(addProduct(item))
   }
   
    return (
        <>
            {
            products?.map( item => {
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
