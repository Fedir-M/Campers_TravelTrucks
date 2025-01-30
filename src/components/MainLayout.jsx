import { Outlet } from "react-router";
import Header from "./Header";

function MainLayout() {
  return (
    <div>
      <p>MainLayout</p>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
