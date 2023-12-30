import { useEffect, useState } from "react";

function App() {
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

  return (
    <div className="h-screen w-full bg-light-background dark:bg-dark-background">
      <h1>TEST</h1>
      <button
        onClick={handleThemeSwitch}
        className="p-4 bg-light-primary rounded-lg dark:bg-dark-primary"
      >
        Test Button
      </button>
    </div>
  );
}

export default App;
