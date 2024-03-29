import { Outlet } from "react-router-dom";

const RootView = () => {
  return (
    <div
      id="root-view"
      className="h-screen w-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-[poppins]"
    >
      <div className="flex flex-col min-h-screen max-w-[1440px] mx-auto h-screen">
        {/*
        <section id="navbar-section" className="w-full h-[50px] z-50 my-8">
          <Navbar />
          <NavbarMobile />
        </section>
  */}
        <div className="h-full w-full flex flex-col justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootView;
