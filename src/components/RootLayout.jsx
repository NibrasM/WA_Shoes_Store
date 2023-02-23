import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavBar";

const RootLayout = () => {
  return (
    <>
      <MainNavBar />
      <Outlet />
    </>
  );
};
export default RootLayout;
