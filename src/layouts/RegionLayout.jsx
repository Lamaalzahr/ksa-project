import { Outlet } from "react-router-dom";
import InfoCards from "../InfoCards";

function RegionLayout() {
  return (
    <>
      <Outlet />

      <InfoCards />
    </>
  );
}

export default RegionLayout;
