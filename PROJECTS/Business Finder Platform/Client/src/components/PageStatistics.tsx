const PageStatistics = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8 bg-card text-card-foreground rounded-lg shadow-lg w-full">
      {/* Businesses Looking To Hire */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold ">
          Almost <span className="font-bold text-primary">10,000</span>
        </h1>
        <div className="mt-2 text-lg text-muted-foreground">
          Businesses Looking To Hire
        </div>
      </div>

      {/* Happy Clients */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold  ">
          More Than <span className="font-bold text-primary">2,300</span>
        </h1>
        <div className="mt-2 text-lg text-muted-foreground">Happy Clients</div>
      </div>
    </div>
  );
};

export default PageStatistics;
