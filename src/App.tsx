import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      data-testid="app"
      className="h-screen w-full bg-light-background dark:bg-dark-background dark:text-dark-text"
    >
      <section className="max-w-[1440px] mx-auto py-[50px]">
        <Navbar />
      </section>
    </div>
  );
}

export default App;
