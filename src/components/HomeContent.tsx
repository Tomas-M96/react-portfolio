import Button from "./generic/Button";

const HomePage = () => {
  return (
    <div
      data-testid="home"
      className="flex flex-col justify-center gap-4 h-full mx-[96px]"
    >
      <div title="name" className="tracking-wider">
        <h1 className="text-5xl underline underline-offset-[12px] decoration-light-primary dark:decoration-dark-primary my-6 tracking-wider">
          Hi, I'm Tomas
        </h1>
        <h1 className="text-2xl">A Software Developer based in South Wales</h1>
        <h1 className="text-2xl">
          Currently working as the Lead Software Developer at{" "}
          <a
            href="https://www.sncmsuk.com/"
            className="text-light-primary dark:text-dark-primary hover:underline"
          >
            Sierra Nevada Corporation Mission Systems UK
          </a>
        </h1>
      </div>
      <div title="download">
        <Button>Download CV</Button>
      </div>
    </div>
  );
};

export default HomePage;
