// Layout Components
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

// Router Config

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
