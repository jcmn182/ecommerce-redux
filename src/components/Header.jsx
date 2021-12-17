// react router dependencies
import { Link} from "react-router-dom";
// components
import { Login } from "./buttons/Login";
import { Signup } from "./buttons/Signup";
import { Cartbtn } from "./buttons/Cartbtn";
// bootstrap
import { Navbar,Container, Nav } from 'react-bootstrap'
export const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className="m-0 w-100">
                    <Navbar.Brand>Nav Bar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="position-relative">
                        <Nav className="me-auto none-style-a">
                            <Link to="/" className="link-style" >Home</Link>
                            <Link to="/" className="link-style">About</Link>
                            <Link to="/" className="link-style">Contact</Link>
                        </Nav>
                        <div className="responsive-buttons r-1">
                            <Login className=""/>
                            <Signup className=""/>
                            <Cartbtn/>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


