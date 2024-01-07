import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootView = () => {
  return (
    <div
      id="root-view"
      className="h-screen w-full bg-light-background dark:bg-dark-background dark:text-dark-text font-[poppins] "
    >
      <section
        id="navbar-section"
        className="max-w-[1440px] mx-auto py-[50px] fixed w-full inset-0"
      >
        <Navbar />
      </section>
      <Outlet />
    </div>
  );
};

export default RootView;
