import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      data-testid="app"
      className="h-screen w-full bg-light-background dark:bg-dark-background dark:text-dark-text font-[poppins] "
    >
      <section
        id="navbar-section"
        className="max-w-[1440px] mx-auto py-[50px] fixed w-full inset-0"
      >
        <Navbar />
      </section>
      <section id="home-section" className="max-w-[1440px] mx-auto h-screen">
        <HomePage />
      </section>
    </div>
  );
}

export default App;
