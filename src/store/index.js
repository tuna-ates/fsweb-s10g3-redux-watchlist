import { legacy_createStore as createStore, combineReducers } from "redux";
import movieReducers from "./reducers/movieReducers";
import {favoriteReducers} from "./reducers/favoriteReducers"
 
const  reducer=combineReducers({
   movieReducers,
 
})
 const store=createStore(reducer);

 export default store;
