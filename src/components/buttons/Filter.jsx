// boostrap 
import {Button, Offcanvas} from 'react-bootstrap';
// hooks
import {useState} from 'react';

export const Filter = ({ name, ...props }) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <div className="d-flex justify-content-end w-100 botton-filter text-dark">
            <Button  onClick={handleShow} className="botton-filter text-dark px-5 pb-3">
            Filter <span className="fa fa-sliders  pt-3"></span>
            </Button>
       </div> 
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  
  
