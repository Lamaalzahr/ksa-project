import { Outlet } from "react-router-dom";
import InfoCards from "../InfoCards";

function RegionLayout() {
  return (
    <>
      <Outlet />

      {/* الكروت تبقى في صفحات المناطق */}
      <InfoCards />
    </>
  );
}

export default RegionLayout;
