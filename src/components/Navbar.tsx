import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

//TO-DO: Add dark mode checking to the App component and use context

const Navbar = () => {
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

  const socialsClickHandler = (selection: string) => {
    if (selection === "linkedin")
      window.open("https://www.linkedin.com/in/tomasmoore96/");
    else if (selection === "github")
      window.open("https://github.com/Tomas-M96");
  };

  return (
    <nav
      data-testid="navbar"
      className="flex flex-wrap items-center justify-between text-xl hidden md:flex max-[1448px]:mx-[48px]"
    >
      <div className="flex flex-row gap-8">
        <button className="tracking-wider underline-offset-8 hover:underline hover:decoration-light-primary-main hover:dark:decoration-dark-primary-main">
          <Link to={"/"}>Home</Link>
        </button>
        <button className="tracking-wider underline-offset-8 hover:underline hover:decoration-light-primary-main hover:dark:decoration-dark-primary-main">
          <Link to={"/projects"}>Projects</Link>
        </button>
        <button className="tracking-wider underline-offset-8 hover:underline hover:decoration-light-primary-main hover:dark:decoration-dark-primary-main">
          <Link to={"/contact"}>Contact</Link>
        </button>
      </div>
      <div className="grow basis-0 flex flex-row justify-end gap-8">
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
        <button onClick={handleThemeSwitch} title="dark-toggle">
          <FontAwesomeIcon
            icon={faCircleHalfStroke}
            className="w-10 h-10 hover:text-light-primary-main hover:dark:text-dark-primary-main"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
