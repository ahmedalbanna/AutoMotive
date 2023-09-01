const FlightSearchRecentContainer = ({
  locationCode,
  flightCode,
  airportCode,
  departureLocationArrivalL,
  departureDates,
}) => {
  return (
    <div
      className="flex-1 rounded-5xs flex flex-col p-5 items-center justify-center gap-[21px] text-left text-5xl text-cornflowerblue-200 font-components-button-large border-[1px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px] md:flex-[unset] md:self-stretch"
      id="Flight Main Container"
    >
      <div
        className="self-stretch flex flex-row flex-wrap items-center justify-between"
        id="To and From"
      >
        <div
          className="w-[44.73px] flex flex-row items-center justify-between"
          id="From Details"
        >
          <h3 className="m-0 relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit inline-block w-[44.73px] shrink-0">
            {locationCode}
          </h3>
        </div>
        <div
          className="h-6 flex flex-col items-center justify-between"
          id="Duration"
        >
          <img className="max-h-full w-[116.26px]" alt="" src={flightCode} />
        </div>
        <div
          className="w-[51.27px] flex flex-row items-center justify-between text-right"
          id="To Details"
        >
          <h3 className="m-0 relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit inline-block w-[51.27px] shrink-0">
            {airportCode}
          </h3>
        </div>
      </div>
      <span
        className="relative text-xl tracking-[0.04em] capitalize text-black"
        id="Depart on"
      >
        <b>{departureLocationArrivalL}</b>
        <span>{departureDates}</span>
      </span>
    </div>
  );
};

export default FlightSearchRecentContainer;
