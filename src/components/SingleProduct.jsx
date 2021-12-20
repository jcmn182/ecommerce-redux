// react router
import { useParams } from "react-router-dom";
//fake data base 
import products from '../db/fakeDB.js';
//bootstrap
import {Tabs,Tab,ListGroup,Button} from 'react-bootstrap';

export const SingleProduct = () => {
    const product = products[0]
    const params = useParams()
    console.log(params)
    return (
        <div className="single_card_product_lay_out">
           <div className="single_card_section_one p-5">
                <img src={product.img} alt={params.name} className="img_single_product py-3"/>
                <p className="py-3"> $ {product.price}</p>
                <Button variant="outline-dark w-50">Add to cart</Button>
           </div>
           <div className="single_card_section_two py-5 px-2">
                <h1 className="pb-5 px-1">{product.name}</h1>
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
