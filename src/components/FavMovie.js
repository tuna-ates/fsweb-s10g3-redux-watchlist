import { useDispatch } from "react-redux";
import { removeFavorite } from "../store/actions/favoritesActions";
import { restoreMovie } from "../store/actions/moviesActions";
export default function FavMovie({ movie }) {
  const dispatch=useDispatch();
  const favCıkar=()=>{
    dispatch(removeFavorite(movie))
    dispatch(restoreMovie(movie))
  }
  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{movie.title}</div>
      <button onClick={favCıkar} className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100">
        Çıkar
      </button>
    </div>
  );
}
