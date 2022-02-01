//types
import {GET_ELECTRONICS, GET_JEWELERY, GET_CLOTHING_M, 
        GET_CLOTHING_F,GET_SINGLE_PRODUCT, CLEAN_SINGLE_PRODUCT} from '../types/fake.api.types.js'

const initialState = {
    sectionOne:[],
    sectionTwo:[],
    sectionThree:[],
    sectionFour:[],
    singleProduct:[],
    category:[]
}
const FakeApiReducer = (state = initialState, action) => {

    const {type, payload} = action
    switch(type) 

        {
            case GET_ELECTRONICS:
                            return { ...state, sectionOne: payload, category:payload[0].category};

            case GET_JEWELERY:
                            return { ...state, sectionTwo: payload, category:payload[0].category };
            
            case GET_CLOTHING_M:
                            return { ...state, sectionThree: payload, category:payload[0].category };
            
            case GET_CLOTHING_F:
                            return { ...state, sectionFour: payload, category:payload[0].category };

            case GET_SINGLE_PRODUCT:
                            return { ...state, singleProduct: payload }; 

            case CLEAN_SINGLE_PRODUCT:
                            return { ...state, singleProduct: [] }; 
                                      

        default : return state
    }
}

export default FakeApiReducer