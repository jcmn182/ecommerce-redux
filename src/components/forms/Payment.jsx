import {Form} from 'react-bootstrap'

export const Payment = () => {
    return (
        <>
            <Form className="pay-size">
                <Form.Group className="mb-3" controlId="numbercard">
                    <Form.Label className="text-size-3 py-3">Enter your credit card information</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="credit card number" />
                </Form.Group>
                <div className="d-flex">
                <Form.Group className="w-75" controlId="creditcard">
                    <Form.Control size="lg" type="number" placeholder="Expired" />
                </Form.Group>
                <Form.Group className="px-1 w-25" controlId="cv">
                    <Form.Control size="lg" type="password" placeholder="CV" />
                </Form.Group>
                </div>
            </Form>
        </>
    )
}
