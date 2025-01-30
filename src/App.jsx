import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import MainPage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CardDetails from "./components/CardDetails";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  // const isAuth = useSelector(isAuthSelector);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="сatalog/:id" element={<CardDetails />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      {/* <Route
        path="*"
        element={isAuth ? <Navigate to="/" /> : <Navigate to="/login" />}
      /> */}
    </Routes>
  );
};

export default App;

// <div>
//   <h1 className="text-[22px] text-textAccent font-mainText font-bold underline">
//     Hello App jsx
//   </h1>
// </div>

//trtrljterlktjerlkerktje
