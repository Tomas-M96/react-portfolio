const Intro = () => {
  return (
    <>
      <div
        id="intro"
        className="flex flex-col flex-1 justify-center items-center"
      >
        <div className="text-center text-white text-[40px] font-normal font-['Poppins']">
          Hi, I’m Tomas Moore
        </div>
        <div className="text-center text-white text-[32px] font-normal font-['Poppins']">
          A Software Developer
        </div>
        <button className="flex justify-center items-center p-4 w-24 border-2 rounded-3xl border-white text-white text-base font-normal font-['Poppins']">
          Download CV
        </button>
      </div>
    </>
  );
};

export default Intro;
