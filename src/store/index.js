import { legacy_createStore as createStore, combineReducers,applyMiddleware} from "redux";
import movieReducers from "./reducers/movieReducers";
import favoriteReducers from "./reducers/favoriteReducers"
import logger from "redux-logger";
 
const  reducer=combineReducers({
   movieReducers,
   favoriteReducers
})
 const store=createStore(reducer,applyMiddleware(logger));

 export default store;
