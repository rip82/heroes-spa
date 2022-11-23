import { types } from "../types/types";


export const authReducer = ( state = {}, action ) => {
    
    switch ( action.types ) {
        
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload                
            };
            
        case types.logout:
            return {
                logged: action.payload,
            };
    
        default:
            return state;
    }
}