const Skeleton = () => {
  return (
    <div className="shadow-lg rounded-xl overflow-hidden">
      <div className="h-[200px] w-full bg-[--shadow-color] animate-pulse max-md:h-[250px]" />
      <div className="p-6">
        <h2 className="mb-5 h-5 bg-[--shadow-color] animate-pulse" />
        <div className="flex flex-col gap-2">
          <p className="h-5 bg-[--shadow-color] animate-pulse" />
          <p className="h-5 bg-[--shadow-color] animate-pulse" />
          <p className="h-5 bg-[--shadow-color] animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
