// redux hooks
import {useSelector,useDispatch} from 'react-redux';
//actions
import {addCart,removeFromCart} from '../../redux/actions/cart.actions.js'
//bootstrap
import {Tabs,Tab,ListGroup,Button} from 'react-bootstrap';

export const SingleProduct = () => {
    const dispatch = useDispatch()     
    const {product} = useSelector(state => state.cart)
    const {cart} = useSelector(state => state.cart)
    const handleAddCart = (prd) =>{
        dispatch(addCart(prd))
    }
    const handleRemoveCart = (id) =>{
        dispatch(removeFromCart(id))
    }

    console.log(product)
   
    return (
        <div className="single_card_product_lay_out">
           <div className="single_card_section_one p-5">
                <img src={product[0].img} alt={product[0].name} className="img_single_product py-3"/>
                <p className="py-3"> $ {product[0].price}</p>
                {cart.some(item => item.id===product[0].id)?(
                <Button variant="outline-dark w-50" onClick={()=>handleRemoveCart(product[0].id)}>
                    Remove to cart
                </Button>):(
                <Button variant="outline-dark w-50" onClick={()=>handleAddCart(product[0])}>
                    Add to cart
                </Button>)
                }
           </div>
           <div className="single_card_section_two py-5 px-2">
                <h1 className="pb-5 px-1">{product[0].name}</h1>
                <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Description" title="Description">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Dolorum maxime illum, quam repudiandae possimus fugit natus eveniet. 
                            Exercitationem, corporis soluta placeat commodi quibusdam, iure beatae 
                            magnam totam porro amet rerum.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Dolorum maxime illum, quam repudiandae possimus fugit natus eveniet. 
                            Exercitationem, corporis soluta placeat commodi quibusdam, iure beatae 
                            magnam totam porro amet rerum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Dolorum maxime illum, quam repudiandae possimus fugit natus eveniet. 
                            Exercitationem, corporis soluta placeat commodi quibusdam, iure beatae 
                            magnam totam porro amet rerum.
                        </p>
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
        </div>
    )
}
