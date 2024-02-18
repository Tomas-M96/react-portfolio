import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/generic/Button";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const HomePage = () => {
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
    <section id="home-section">
      <div
        data-testid="home"
        className="flex flex-col justify-center items-center gap-4 h-full mx-[96px]"
      >
        <div title="name" className="tracking-wider">
          <h1 className="text-center text-3xl md:text-5xl md:underline underline-offset-[12px] decoration-light-primary-main dark:decoration-dark-primary-main my-6 tracking-wider">
            Hi, {""}
            <span className="block underline underline-offset-[12px] decoration-light-primary-main dark:decoration-dark-primary-main my-6 tracking-wider  md:inline">
              I'm Tomas
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-center">
            <h1>A Software Developer based in South Wales</h1>
            <h1>
              Currently working as the Lead Software Developer at{" "}
              <a
                href="https://www.sncmsuk.com/"
                className="text-light-primary-main dark:text-dark-primary-main hover:underline"
              >
                Sierra Nevada Corporation Mission Systems UK
              </a>
            </h1>
          </div>
        </div>
        <div title="download-button">
          <Button>Download CV</Button>
        </div>
        <div className="flex flex-row justify-center items-center gap-8">
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
      </div>
    </section>
  );
};

export default HomePage;
