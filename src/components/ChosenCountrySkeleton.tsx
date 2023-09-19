const ChosenCountrySkeleton = () => {
  return (
    <div className="container text-[--text-color]">
      <div className="bg-[--shadow-color] w-52 h-16 rounded-lg mb-8 animate-pulse"></div>
      <div className="my-8 flex max-xl:flex-col max-xl:gap-10 items-center justify-between gap-32">
        <div className="p-5 shadow-2xl max-w-full">
          <div className="w-[550px] max-w-full h-[350px] max-sm:h-[250px] animate-pulse bg-[--shadow-color]"></div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-4xl font-bold max-xl:text-center"></h2>
          <ul className="flex flex-col gap-3 xl:h-[250px] flex-wrap max-xl:items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
              <li className="h-10 bg-[--shadow-color] animate-pulse w-[250px] max-xl:w-full" key={e} />
            ))}
          </ul>
          <div className="font-semibold flex max-xl:items-center max-xl:flex-col gap-3">
            <span className="h-10 bg-[--shadow-color] w-40 animate-pulse"></span>
            <ul className="flex gap-2 flex-wrap font-normal max-xl:justify-center">
              {[1, 2, 3].map((e) => (
                <li
                  key={e}
                  className="bg-[--shadow-color] animate-pulse h-10 w-32"
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChosenCountrySkeleton;
