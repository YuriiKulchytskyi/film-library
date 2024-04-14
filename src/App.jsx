import { Route, Routes } from "react-router-dom";
import { ListPage } from "./pages/ListPage";
import { Favorites } from "./pages/Favorites";
import { SharedLayout } from "./components/SharedLayout";
import { useEffect } from "react";
import { setAllFavoritesFromLocalStorage } from "./redux/films/filmsSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem(`favorites`);
    const parsedFavorites = JSON.parse(favoritesFromStorage) || [];
    dispatch(setAllFavoritesFromLocalStorage(parsedFavorites));
  }, []);

  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
