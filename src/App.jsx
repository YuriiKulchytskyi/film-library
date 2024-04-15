import { Route, Routes } from "react-router-dom";
// import './App.css'
// import { MovieList } from "./components/MovieList/MovieList";
import { Favorites } from "./pages/Favorites";
import { SharedLayout } from "./components/Shared/SharedLayout";
import { Suspense } from "react";
import { AppContainer } from "./App.styled";
import MovieForm from "./components/Forms/AddForm/AddForm";
import { Catalog } from "./pages/Catalog";
import MovieDetails from "./components/MovieDetails/MovieDetails";


function App() {
  return (
    <AppContainer>
      <SharedLayout />
      <Suspense />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/movies/:id" element={<MovieDetails/>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add" element={<MovieForm />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
