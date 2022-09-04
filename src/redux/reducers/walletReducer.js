
export default function walletReducer(state = {}, action) {
    switch (action.type) {
      case 'ADD_CRYPTO':{
        const {id} = action.payload;
        return {...state,
        [id]:{
            ...action.payload, 
        }
        }
    }
    case 'SUBTRACT_CRYPTO':{
        return state  
        }
    case 'DELETE_CRYPTO':{
        return state}    
      default:
        return state
    }
  }