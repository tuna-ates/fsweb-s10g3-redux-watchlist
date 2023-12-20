

import { NEXT,PREV } from "../actions/moviesActions"
import {movies} from "../../movies"

 const initialState={
   movies:movies,
   sira:0,
   disabledNav:"PREV"
}


 const movieReducers=(state=initialState,action)=>{
  
    switch (action.type) {
        case NEXT:
            if(state.sira===state.movies.length-2){
              return{...state,sira:state.sira+1,disabledNav:"NEXT"}
            }
            else{
                return{...state,sira:state.sira+1,disabledNav:"NONE"}
            }
            break;
    
        case PREV:
            if(state.sira===1){
                return{...state,sira:state.sira-1,disabledNav:"PREV"}
            }
            else{
                return{...state,sira:state.sira-1,disabledNav:"NONE"}
            }
            
        default:
            return state
            break;
    }
}

export default movieReducers;