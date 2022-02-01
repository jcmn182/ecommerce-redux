// hooks react 
import { useParams } from "react-router-dom";
//bootstrap
import {Tabs,Tab,ListGroup,Button,Spinner} from 'react-bootstrap';
//hooks
import {useEffect} from 'react';
// redux hooks
import {useDispatch,useSelector} from 'react-redux';
//actions 
import {HandleAddSingleProduct,deleteSingleProduct} from '../../redux/actions/fake.api.actions.js';
import {addCart, removeFromCart} from '../../redux/actions/cart.actions.js'

export const SingleProduct = () => {

    const {singleProduct} = useSelector(state => state.FakeApi);
    const {cart} = useSelector(state => state.cart);
    const {productId} = useParams();
    const dispatch = useDispatch(); 
  
    useEffect(() => {
        
        const HandleaddProduct = (param) =>{
            dispatch(HandleAddSingleProduct(param))
        };
        HandleaddProduct(productId)
        return () => {
            dispatch(deleteSingleProduct())
          };
    }, [])

    //handle functios

    const handleAddCart = (prd) =>{
        dispatch(addCart(prd))
    }
    const handleRemoveCart = (id) =>{
        dispatch(removeFromCart(id))
    }

    return (
        <>
        {
        singleProduct?<div className="single_card_product_lay_out">
           <div className="single_card_section_one p-5">
                <img src={singleProduct.image} alt={singleProduct.title} className="img_single_product py-3"/>
                <p className="py-3"> $ {singleProduct.price}</p>
                {cart.some(item => item.id===singleProduct.id)?(
                <Button variant="outline-dark w-50" onClick={()=>handleRemoveCart(singleProduct.id)}>
                    Remove to cart
                </Button>):(
                <Button variant="outline-dark w-50" onClick={()=>handleAddCart(singleProduct)}>
                    Add to cart
                </Button>)
                }
           </div>
           <div className="single_card_section_two py-5 px-2">
                <h1 className="pb-5 px-1">{singleProduct.title}</h1>
                <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Description" title="Description">
                        <p>{singleProduct.description}</p>
                    </Tab>
                    <Tab eventKey="Details" title="Details">
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </Tab>
                </Tabs>
           </div>
        </div>:
        <div className="w-100 hv-100 d-flex justify-content-center align-items-center">
            <Spinner animation="grow" size="xxl"/>
        </div>
        }
     </>    
    )
}
