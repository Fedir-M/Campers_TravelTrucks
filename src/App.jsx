import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoaderClockLoader from "./components/LoaderClockLoader";

const MainLayout = lazy(() => import("./components/MainLayout"));
const MainPage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const CardDetails = lazy(() => import("./components/CardDetails"));
const Features = lazy(() => import("./components/Features"));
const Reviews = lazy(() => import("./components/Reviews"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

// import MainLayout from "./components/MainLayout";
// import MainPage from "./pages/HomePage";
// import CatalogPage from "./pages/CatalogPage";
// import CardDetails from "./components/CardDetails";
// import Features from "./components/Features";
// import Reviews from "./components/Reviews";
// import FavoritesPage from "./pages/FavoritesPage";

// const SharedLayout = () => {
//   return (
//     <>
//       <MainLayout />
//       <Suspense
//         fallback={
//           <div
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               backgroundColor: "rgba(0, 0, 0, 0.1)",
//               zIndex: 100,
//             }}
//           >
//             <LoaderClockLoader />
//           </div>
//         }
//       >
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

const App = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            zIndex: 100,
          }}
        >
          <LoaderClockLoader />
        </div>
      }
    >
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
    </Suspense>
  );
};

export default App;
