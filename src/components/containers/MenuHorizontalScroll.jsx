// redux hooks
import {useDispatch} from 'react-redux';
//actions 
import {HandleAddElectronics,HandleAddJewelery,HandleAddClothingM,HandleAddClothingF} from '../../redux/actions/fake.api.actions.js';
// react router 

import {Link} from "react-router-dom";

export const MenuHorizontalScroll = () => {
    //redux hooks
    const dispatch = useDispatch(); 
    //handle functions
    const handleAddparamElectronics = (param) =>{
        dispatch(HandleAddElectronics(param))
    };

    const handleAddparamJewelery = (param) =>{
        dispatch(HandleAddJewelery(param))
    };
    const handleAddparamClothingM = (param) =>{
        dispatch(HandleAddClothingM(param))
    };

    const handleAddparamClothingF = (param) =>{
        dispatch(HandleAddClothingF(param))
    };
    
    
    return (
        <>
            <div className="menu-horizontal-scroll none-style-a d-flex  justify-content-center p-3 w-100">
                <div className="d-flex justify-content-around w-75">
                    <Link to="/electronics" className="px-3" onClick={()=>handleAddparamElectronics("electronics")}>electronics</Link>
                    <Link to="/jewelery"  className="px-3" onClick={()=>handleAddparamJewelery("jewelery")}>jewelery</Link>
                    <Link to="/men" className="px-3" onClick={()=>handleAddparamClothingM("men's clothing")}>men's clothing</Link>
                    <Link to ="/women" className="px-3" onClick={()=>handleAddparamClothingF("women's clothing")}>women's clothing</Link>
                </div>
            </div>
        </>
    )
}
