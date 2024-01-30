const ErrorPage = () => {
  return (
    <div
      id="error-page"
      className="h-screen w-full bg-light-background dark:bg-dark-background dark:text-dark-text font-[poppins] "
    >
      <section className="flex flex-col gap-4 text-center items-center justify-center h-full">
        <h1 className="text-5xl">Oops, something went wrong!</h1>
        <button className="py-[16px] px-[16px] bg-light-primary dark:bg-dark-primary text-light-text dark:text-light-text rounded-lg">
          Go Back
        </button>
      </section>
    </div>
  );
};

export default ErrorPage;
