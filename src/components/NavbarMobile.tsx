import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const socialsClickHandler = (selection: string) => {
    if (selection === "linkedin")
      window.open("https://www.linkedin.com/in/tomasmoore96/");
    else if (selection === "github")
      window.open("https://github.com/Tomas-M96");
  };

  return (
    <>
      <nav className="md:hidden flex flex-col gap-4 justify-between mx-[48px]">
        <div className="flex flex-row justify-between">
          <button onClick={toggleMenu} title="menu-toggle">
            <FontAwesomeIcon
              icon={faBars}
              className="w-10 h-10 hover:text-light-primary-main hover:dark:text-dark-primary-main"
            />
          </button>
          <button onClick={handleThemeSwitch} title="dark-toggle">
            <FontAwesomeIcon
              icon={faCircleHalfStroke}
              className="w-10 h-10 hover:text-light-primary-main hover:dark:text-dark-primary-main"
            />
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col gap-6 text-center items-center justify-center h-full bg-light-background dark:bg-dark-background">
            <button className="tracking-wider underline-offset-8 hover:underline hover:decoration-light-primary-main hover:dark:decoration-dark-primary-main">
              <Link to={"/"}>Home</Link>
            </button>
            <button className="tracking-wider underline-offset-8 hover:underline hover:decoration-light-primary-main hover:dark:decoration-dark-primary-main">
              <Link to={"/projects"}>Projects</Link>
            </button>
            <button className="tracking-wider underline-offset-8 hover:underline hover:decoration-light-primary-main hover:dark:decoration-dark-primary-main">
              <Link to={"/contact"}>Contact</Link>
            </button>
            <div className="flex flex-row gap-4 items-center justify-center">
              <button
                onClick={socialsClickHandler.bind(null, "github")}
                title="github"
              >
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  className="w-10 h-10 hover:text-light-primary-main hover:dark:text-dark-primary-main"
                />
              </button>
              <button
                onClick={socialsClickHandler.bind(null, "linkedin")}
                title="linkedin"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-10 h-10 hover:text-light-primary-main hover:dark:text-dark-primary-main"
                />
              </button>
            </div>
            <div className="w-full h-[1px] bg-light-text dark:bg-dark-text" />
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarMobile;
