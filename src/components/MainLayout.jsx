import { Outlet } from "react-router";
import Header from "./Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="pt-[74px]">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
