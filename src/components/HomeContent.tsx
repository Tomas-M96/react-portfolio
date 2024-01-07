const HomePage = () => {
  return (
    <div
      data-testid="home"
      className="flex flex-col items-center justify-center gap-4 h-full"
    >
      <div
        title="name"
        className="flex flex-col text-center tracking-wider gap-2"
      >
        <h1 className="text-5xl">Hi</h1>
        <h2 className="text-5xl">I'm Tomas Moore</h2>
        <h2 className="text-3xl">A Software Developer</h2>
      </div>
      <div title="download">
        <button className="py-[16px] px-[16px] bg-light-primary dark:bg-dark-primary text-light-text dark:text-light-text rounded-lg">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default HomePage;
