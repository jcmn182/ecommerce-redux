import { Link } from "react-router-dom"
// react bootstrap
import { Button } from 'react-bootstrap'

export const Cartbtn = () => {
    return (
        <>
            <Button variant="dark none-style-a m-2 responsive-padding">
                <Link to="/" className="d-flex align-items-center">
                    <span className="fa fa-shopping-cart me-1"></span> {0}
                </Link>
            </Button>
        </>
    )
}
