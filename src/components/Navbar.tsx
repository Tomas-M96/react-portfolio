import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

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
    <div
      data-testid="navbar"
      className="margin-auto flex flex-row justify-between font-[poppins] text-xl"
    >
      <div className="flex flex-row items-center">
        <h2>Logo</h2>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <button className="tracking-wider underline-offset-8 hover:underline hover:decoration-light-primary hover:dark:decoration-light-accent-primary">
          Home
        </button>
        <button className="tracking-wider underline-offset-8 hover:underline hover:decoration-light-primary hover:dark:decoration-light-accent-primary">
          About
        </button>
        <button className="tracking-wider underline-offset-8 hover:underline hover:decoration-light-primary hover:dark:decoration-light-accent-primary">
          Projects
        </button>
        <button className="tracking-wider underline-offset-8 hover:underline hover:decoration-light-primary hover:dark:decoration-light-accent-primary">
          Contact
        </button>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <button
          onClick={socialsClickHandler.bind(null, "github")}
          title="github"
        >
          <FontAwesomeIcon
            icon={faSquareGithub}
            className="w-10 h-10 hover:text-light-primary hover:dark:text-dark-accent-primary"
          />
        </button>
        <button
          onClick={socialsClickHandler.bind(null, "linkedin")}
          title="linkedin"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-10 h-10 hover:text-light-primary hover:dark:text-dark-accent-primary"
          />
        </button>
        <button onClick={handleThemeSwitch} title="dark-toggle">
          <FontAwesomeIcon
            icon={faCircleHalfStroke}
            className="w-10 h-10 hover:text-light-primary hover:dark:text-dark-accent-primary"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
