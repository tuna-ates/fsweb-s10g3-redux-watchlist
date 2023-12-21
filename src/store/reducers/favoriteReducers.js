import { ADD_FAVORİTE,REMOVE_FAVORİTE} from "../actions/favoritesActions";


const initialState={
    favorite:[{
        "id": 8,
        "title": "Memento",
        "year": "2000",
        "runtime": "113",
        "genres": [
          "Mystery",
          "Thriller"
        ],
        "director": "Christopher Nolan",
        "actors": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
        "plot": "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
        "posterUrl": "https://www.moviemem.com/wp-content/uploads/2020/07/MEMENTO1SH.jpg"
      }]
}

const favoriteReducers=(state=initialState,action)=>{
   switch (action.type) {
    
   case ADD_FAVORİTE:
    return {...state,favorite:[...state.favorite,action.payload]}

    case REMOVE_FAVORİTE:
        return {...state,favorite:state.favorite.filter((item)=>item.id!==action.payload.id
            
        )}
    default:
        return state
        break;
   }

}

export default favoriteReducers;