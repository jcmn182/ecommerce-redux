// router
import { Link } from "react-router-dom";
// data base fake
import  products  from '../db/fakeDB.js'
// bootstrap
import { Card, Button } from 'react-bootstrap'
export const CardProduct = () => {
    
    return (
        <>
            {
            products?.map( item => {
                return(
                    <>
                        <Card key={item.id} className="text-center m-4">
                            <div className="center">
                            <Card.Img variant="top" src={item.img} className="img-card px-5 pt-4 pb-1"/>
                            </div>
                            <Card.Body className="text-center"> 
                                <Card.Text className="truncate-text text-size-2 mb-2">{item.name}</Card.Text>
                                <Card.Text className="text-secondary font-weight-light text-size-1 mb-2">
                                $ {item.price}
                                </Card.Text>
                                <Button variant="outline-dark py-2 mb-3 w-50 text-size-button-1 none-style-a"> 
                                <Link to={`/product/${item.name}`}> Buy Now </Link> 
                                </Button>
                            </Card.Body>
                        </Card>
                    </>
                )})
            }
        </>
    )
}
