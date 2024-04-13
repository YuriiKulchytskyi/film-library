import { Route, Routes } from "react-router-dom";
import { ListPage } from "./pages/ListPage";
import { Favorites } from "./pages/Favorites";
import { SharedLayout } from "./components/SharedLayout";

function App() {
  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </>
  );
}

export default App;
