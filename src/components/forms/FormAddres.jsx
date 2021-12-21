// bootstrap
import {Form} from 'react-bootstrap';

export const FormAddres = () => {
    return (
        <>
        <Form className="form-size">
            <Form.Group className="mb-3" controlId="name">
                <Form.Control size="lg" type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastname">
                <Form.Control size="lg" type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addres">
                <Form.Control size="lg" type="text" placeholder="Addres (street)" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="neighborhood">
                <Form.Control size="lg" type="text" placeholder="City" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="postaladdres">
                <Form.Control size="lg" type="text" placeholder="Postal address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
                <Form.Control size="lg" type="text" placeholder="Country" />
            </Form.Group>
            <p className="text-size-3">What is your contact information?</p>
            <Form.Group className="mb-3" controlId="email">
                <Form.Control size="lg" type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telephone">
                <Form.Control size="lg" type="number" placeholder="Telephone Number" />
            </Form.Group>
        </Form>  
        </>
    )
}
