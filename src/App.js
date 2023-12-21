import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector } from "react-redux";
import store from "./store";
import { useDispatch } from "react-redux";
import { next, prev, removeMovie } from "./store/actions/moviesActions";
import { addFavorite } from "./store/actions/favoritesActions";
function App() {
  //const [sira, setSira] = useState(0);
  const {sira,movies}=useSelector((store)=>store.movieReducers)
  const favMovies =useSelector((store)=>store.favoriteReducers.favorite);
   const dispatch=useDispatch()

  function sonrakiFilm() {
    dispatch(next())
  }
  const disabledNav=useSelector((store)=>store.movieReducers.disabledNav);
  const oncekiFilm=()=>{
    dispatch(prev())
  }
  const favEkle=()=>{
    dispatch(addFavorite(movies[sira]))
    dispatch(removeMovie(movies[sira]));
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
          <button
              onClick={oncekiFilm}
              disabled={disabledNav==="PREV"}
              className=" disabled:opacity-50 select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>
            <button
              onClick={sonrakiFilm}
              disabled={disabledNav==="NEXT"}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50"
            >
              Sonraki
            </button>
            <button onClick={favEkle} className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white">
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} movie={movie}  />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
