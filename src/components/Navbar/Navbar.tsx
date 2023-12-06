import { House, SunDim } from "@phosphor-icons/react";
const Navbar = () => {
  return (
    <>
      <nav className="w-full flex flex-row justify-between items-center items-stretch bg-background m">
        <div id="logo-section" className="flex flex-start space-x-4">
          <House className="text-white items-center justify-center border-2 border-white rounded-3xl w-14 h-14 p-2" />
        </div>
        <div id="button-section" className="flex flex-start space-x-4">
          <button className="flex justify-center items-center p-4 w-24 border-2 rounded-3xl border-white text-white text-base font-normal font-['Poppins']">
            About
          </button>
          <button className="flex justify-center items-center p-4 w-24 border-2 rounded-3xl border-white text-white text-base font-normal font-['Poppins']">
            Project
          </button>
          <button className="flex justify-center items-center p-4 w-24 border-2 rounded-3xl border-white text-white text-base font-normal font-['Poppins']">
            Contact
          </button>
        </div>
        <div id="mode-section" className="flex flex-start space-x-4">
          <SunDim className="text-white items-center justify-center border-2 border-white rounded-3xl w-14 h-14 p-2" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
