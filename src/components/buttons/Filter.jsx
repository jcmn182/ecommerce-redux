// boostrap 
import {Button, Offcanvas} from 'react-bootstrap';
// react hooks
import {useState} from 'react';
// redux hooks
import {useSelector, useDispatch} from 'react-redux';
//actions 
import {SearchSortLowToHigh,SearchSortHightoLow,SearchbyFastDelivery,clearFilter} from '../../redux/actions/getData.actions.js'

export const Filter = ({ name, ...props }) => {

    const {sort,byFastDelivery} = useSelector(state => state.getData)
    const dispatch = useDispatch()  
    
    //states
    const [show, setShow] = useState(false);
    

    // redux actions 
    const HandleSortLowToHigh = () =>{
        dispatch(SearchSortLowToHigh())
    }

    const HandleSortHightoLow = () =>{
        dispatch(SearchSortHightoLow())
    }

    const handlebyFastDelivery = () => {
        dispatch(SearchbyFastDelivery())
    }

    const handleclearFilter = (e) => {
        dispatch(clearFilter(e))
    }

    //actions styles
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
            <Offcanvas.Title>Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           
          <div>
           <form>
            <div className="px-3 py-1 sm:px-8  sm:py-3">
                <input type="radio" name="group1" onChange={()=>HandleSortLowToHigh()}
                 checked={sort === "lowToHigh" ? true : false}/>
                <label className="p-2">Ascending</label>
            </div>
            <div className="px-3 py-1">
                <input type="radio" name="group1" onChange={()=>HandleSortHightoLow()}
                checked={sort === "HighToLow" ? true : false}/>
                <label className="p-2">Descending</label>
            </div> 
            <div className="px-3 py-1 sm:px-8  sm:py-3">
                <input type="checkbox" name="group1" onChange={()=> handlebyFastDelivery()}
                checked={byFastDelivery}/>
                <label className="p-2"> Fast Delivery Only </label>
            </div>

            <Button variant="outline-dark w-100 mt-5" onClick={(e)=>handleclearFilter(e)}>Clear filters</Button>
           
           </form>
        </div>

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  
  
