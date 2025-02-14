import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import MainPage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CardDetails from "./components/CardDetails";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => {
  // const isAuth = useSelector(isAuthSelector);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CardDetails />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
