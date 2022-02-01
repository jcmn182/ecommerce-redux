//types
import {GET_ELECTRONICS,GET_JEWELERY,GET_CLOTHING_M,GET_CLOTHING_F,
        GET_SINGLE_PRODUCT, CLEAN_SINGLE_PRODUCT,} from '../types/fake.api.types.js'

// thunk actions

export const HandleAddElectronics = (param) =>{
    return async function (dispatch) {
        fetch(`https://fakestoreapi.com/products/category/${param}`)
        .then(res=>res.json())
        .then(json=>dispatch(addElectronics(json)))
        .catch(err => {
            console.log(err)
        })
    
    }
    };

export const HandleAddJewelery = (param) =>{
    return async function (dispatch) {
       fetch(`https://fakestoreapi.com/products/category/${param}`)
       .then(res=>res.json())
       .then(json=>dispatch(addJewelery(json)))
       .catch(err => {
        console.log(err)
    })
       
   }
   };

export const HandleAddClothingM = (param) =>{
    return async function (dispatch) {
       fetch(`https://fakestoreapi.com/products/category/${param}`)
       .then(res=>res.json())
       .then(json=>dispatch(addClothingM(json)))
       .catch(err => {
        console.log(err)
    })
       
   }
   };

export const HandleAddClothingF = (param) =>{
    return async function (dispatch) {
       fetch(`https://fakestoreapi.com/products/category/${param}`)
       .then(res=>res.json())
       .then(json=>dispatch(addClothingF(json)))
       .catch(err => {
        console.log(err)
    })
       
   }
   };

export const HandleAddSingleProduct = (param) =>{
    return async function (dispatch) {
       fetch(`https://fakestoreapi.com/products/${param}`)
       .then(res=>res.json())
       .then(json=>dispatch(addProduct(json)))
       .catch(err => {
        console.log(err)
    })
       
   }
   };

export const HandleLowToHighElectronics = (param) =>{
 
    return async function (dispatch) {
        fetch(`https://fakestoreapi.com/products/category/${param}?sort=asc`)
       .then(res=>res.json())
       .then(json=>dispatch(addElectronics(json)))
       .catch(err => {
        console.log(err)
    })
   }
   };

export const HandleHighToLowElectronics = (param,) =>{
 
    return async function (dispatch) {
        fetch(`https://fakestoreapi.com/products/category/${param}?sort=desc`)
       .then(res=>res.json())
       .then(json=>dispatch(addElectronics(json)))
       .catch(err => {
        console.log(err)
    })
   }
   };

export const HandleLowToHighJewelery = (param,) =>{
 
    return async function (dispatch) {
       fetch(`https://fakestoreapi.com/products/category/${param}?sort=asc`)
       .then(res=>res.json())
       .then(json=>dispatch(addElectronics(json)))
       .catch(err => {
           console.log(err)
       })
   }
   };

export const HandleHighToLowJewelery = (param,) =>{
 
    return async function (dispatch) {
        fetch(`https://fakestoreapi.com/products/category/${param}?sort=desc`)
       .then(res=>res.json())
       .then(json=>dispatch(addJewelery(json)))
       .catch(err => {
        console.log(err)
    })
   }
   };

export const HandleLowToHighClothingM = (param,) =>{
 
    return async function (dispatch) {
        fetch(`https://fakestoreapi.com/products/category/${param}?sort=asc`)
       .then(res=>res.json())
       .then(json=>dispatch(addClothingM(json)))
       .catch(err => {
        console.log(err)
    })

   }
   };

export const HandleHighToLowClothingM = (param,) =>{
 
    return async function (dispatch) {
        fetch(`https://fakestoreapi.com/products/category/${param}?sort=desc`)
       .then(res=>res.json())
       .then(json=>dispatch(addClothingM(json)))
       .catch(err => {
        console.log(err)
    })

   }
   };


export const HandleLowToHighClothingF = (param,) =>{
 
    return async function (dispatch) {
        fetch(`https://fakestoreapi.com/products/category/${param}?sort=asc`)
       .then(res=>res.json())
       .then(json=>dispatch(addClothingF(json)))
       .catch(err => {
        console.log(err)
    })

   }
   };

export const HandleHighToLowClothingF = (param,) =>{
 
    return async function (dispatch) {
        fetch(`https://fakestoreapi.com/products/category/${param}?sort=desc`)
       .then(res=>res.json())
       .then(json=>dispatch(addClothingF(json)))
       .catch(err => {
        console.log(err)
    })

   }
   };  


// redux actions 
 const addElectronics = prod => {
     
    return {
        type: GET_ELECTRONICS,
        payload:prod
    }
}

 const addJewelery = (prod) => {

    return {
        type: GET_JEWELERY,
        payload:prod
    }
}

 const addClothingM = (prod) => {

    return {
        type: GET_CLOTHING_M,
        payload:prod
    }
}

 const addClothingF = (prod) => {

    return {
        type: GET_CLOTHING_F,
        payload:prod
    }
}

const addProduct = (prod) => {

    return {
        type: GET_SINGLE_PRODUCT,
        payload:prod
    }
}

export const deleteSingleProduct = () => {
    return {
        type: CLEAN_SINGLE_PRODUCT,
    }
}

