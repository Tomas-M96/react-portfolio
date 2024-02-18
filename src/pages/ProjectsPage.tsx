const ProjectsPage = () => {
  return (
    <section
      id="projects-section"
      className="max-w-[1440px] w-3/4 mx-auto overflow-hidden flex flex-col gap-4 mt-[16px]"
    >
      <h1 className="text-center md:text-left text-5xl underline underline-offset-[12px] decoration-light-primary-main dark:decoration-dark-primary-main">
        Projects
      </h1>
      <div
        data-testid="home"
        className="flex flex-col justify-center gap-4 h-full w-full overflow-auto"
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="bg-slate-400 text-light-text h-[200px] width-[200px] flex justify-center items-center">
            Coming Soon
          </div>
          <div className="bg-slate-400 text-light-text h-[200px] width-[200px] flex justify-center items-center">
            Coming Soon
          </div>
          <div className="bg-slate-400 text-light-text h-[200px] width-[200px] flex justify-center items-center">
            Coming Soon
          </div>
          <div className="bg-slate-400 text-light-text h-[200px] width-[200px] flex justify-center items-center">
            Coming Soon
          </div>
          <div className="bg-slate-400 text-light-text h-[200px] width-[200px] flex justify-center items-center">
            Coming Soon
          </div>
          <div className="bg-slate-400 text-light-text h-[200px] width-[200px] flex justify-center items-center">
            Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
