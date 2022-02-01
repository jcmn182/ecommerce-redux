//  react router
import { Link  } from "react-router-dom";
// react hooks 
import {useEffect,useState} from 'react';
// bootstrap
import { Card, Button, Spinner } from 'react-bootstrap'
// components
import {Filterbtn} from '../buttons/Filterbtn.jsx';

export const CardProducts = ({products}) => {

    const [loading, setLoading] = useState(false)

    const handlerLoader = () => setLoading(true);

    // side effects
    useEffect(() => {
        const loader = () => {
           if (products) {
            handlerLoader()
           }
      }
      loader()
      }, [products])

    return (
    <div className="w-100 h-100">
        {
                loading?<>
                <Filterbtn category={products} />
                <div className="lay_out">
                    {
                    products?.map( (item) => {
                        return(
                            <div key={item.id}>
                                <Card  className="text-center m-4">
                                    <div className="center" >
                                    <Card.Img variant="top" src={item.image} className="img-card px-5 pt-4 pb-1"/>
                                    </div>
                                    <Card.Body className="text-center"> 
                                        <Card.Text className="text-truncate text-size-2 mb-2">{item.title}</Card.Text>
                                        <Card.Text className="text-secondary font-weight-light text-size-1 mb-2">
                                        $ {item.price}
                                        </Card.Text>
                                        <Button variant="outline-dark py-2 mb-3 w-50 text-size-button-1 none-style-a"> 
                                        <Link to={`/product/${item.id}`}> Buy Now </Link> 
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )})
                    }
                </div>
                </>
                :
                <div className="w-100 hv-100 d-flex justify-content-center align-items-center">
                    <Spinner animation="grow" size="xxl"/>
                </div>
        } 
    </div>
    )
}
