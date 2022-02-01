// boostrap 
import {Offcanvas} from 'react-bootstrap';
// react hooks
import {useState} from 'react';
// redux hooks
import {useDispatch, useSelector} from 'react-redux';
//actions 
import {HandleLowToHighElectronics, HandleLowToHighJewelery,HandleHighToLowElectronics, 
        HandleHighToLowJewelery, HandleLowToHighClothingM, HandleHighToLowClothingM,
        HandleLowToHighClothingF, HandleHighToLowClothingF
       } from '../../redux/actions/fake.api.actions.js';

export const Filterbtn = () => {
     
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [sort, setSort] = useState(false);
    
    const {category} = useSelector(state => state.FakeApi);

    const HandleSortLowToHigh = () =>{
        if(category==="electronics"){
            return dispatch(HandleLowToHighElectronics(category))
        }
        else if(category==="jewelery"){
          return dispatch(HandleLowToHighJewelery(category))
        }
     else if(category==="men's clothing"){
        return dispatch(HandleLowToHighClothingM(category))
        }
    else if(category==="women's clothing"){
      return dispatch(HandleLowToHighClothingF(category))
        }
    }

    const HandleSortHightoLow = () =>{

      if(category==="electronics"){
        return dispatch(HandleHighToLowElectronics(category))
      }
      else if(category==="jewelery"){
      return dispatch(HandleHighToLowJewelery(category))
      }
      else if(category==="men's clothing"){
      return dispatch(HandleHighToLowClothingM(category))
      }
      else if(category==="women's clothing"){
      return dispatch(HandleHighToLowClothingF(category))
      }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
      <div className="d-flex justify-content-end w-100 botton-filter text-dark">
          <span  onClick={handleShow} className="botton-filter text-dark px-5 pb-3">
              Filter  <span className="fa fa-sliders  pt-3"></span>
          </span>
       </div> 
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
            <form>
                <div className="px-3 py-1 sm:px-8  sm:py-3">
                    <input type="radio" name="group1" onChange={()=>{HandleSortLowToHigh(); setSort("lowToHigh")}}
                    checked={sort === "lowToHigh" ? true : false}/>
                    <label className="p-2">Ascending</label>
                </div>
                <div className="px-3 py-1">
                    <input type="radio" name="group1" onChange={()=>{HandleSortHightoLow(); setSort("HighToLow")}}
                    checked={sort === "HighToLow" ? true : false}/>
                    <label className="p-2">Descending</label>
                </div> 
            </form>
          </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  
  
