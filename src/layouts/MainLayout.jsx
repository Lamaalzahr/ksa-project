import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header>
        <h1>اكتشف مناطق المملكة</h1>
      </header>

      <Outlet />
    </>
  );
}

export default MainLayout;
