import Button from "../components/generic/Button";

const HomePage = () => {
  return (
    <section id="home-section">
      <div
        data-testid="home"
        className="flex flex-col justify-center items-center md:items-start gap-4 h-full mx-[96px]"
      >
        <div title="name" className="tracking-wider">
          <h1 className="text-center md:text-left text-3xl md:text-5xl md:underline underline-offset-[12px] decoration-light-primary-main dark:decoration-dark-primary-main my-6 tracking-wider">
            Hi, {""}
            <span className="block underline underline-offset-[12px] decoration-light-primary-main dark:decoration-dark-primary-main my-6 tracking-wider  md:inline">
              I'm Tomas
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-center md:text-left">
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
      </div>
    </section>
  );
};

export default HomePage;
