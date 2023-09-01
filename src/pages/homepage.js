import TravelSectionContainer from "../components/travel-section-container";
import FlightSearchRecentContainer from "../components/flight-search-recent-container";
import PopDestinationsMainContainer from "../components/pop-destinations-main-container";
import RecommendedHolidaysCard from "../components/recommended-holidays-card";
import PopularStaysContainer1 from "../components/popular-stays-container1";
import FormContainer1 from "../components/form-container1";

const Homepage = () => {
  return (
    <div className="relative bg-primary-contrast w-full overflow-hidden flex flex-col items-center justify-start gap-[69px] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange">
      <TravelSectionContainer />
      <section
        className="w-full flex flex-col py-0 px-20 box-border items-center justify-start gap-[80px] max-w-[1280px] text-left text-lg text-darkslategray-400 font-components-button-large md:pl-[30px] md:pr-[30px] md:box-border"
        id="Home-Contents"
      >
        <div className="self-stretch flex flex-col items-start justify-start md:block">
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[20px]"
            id="Upcoming Flight Section"
          >
            <h4
              className="m-0 self-stretch relative text-inherit tracking-[0.04em] uppercase font-bold font-inherit"
              id="Recent Searches"
            >
              Recent Searches
            </h4>
            <div
              className="self-stretch flex flex-col items-start justify-center gap-[36px] text-lightgray md:flex-col"
              id="Flight Details"
            >
              <div
                className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[15px] md:flex-col"
                id="Recent Searches"
              >
                <FlightSearchRecentContainer
                  locationCode="SIN"
                  flightCode="/flight-icons.svg"
                  airportCode="LAX"
                  departureLocationArrivalL="Depart on: "
                  departureDates="7 Sep 2021"
                />
                <FlightSearchRecentContainer
                  locationCode="MY"
                  flightCode="/flight-icons1.svg"
                  airportCode="DUB"
                  departureLocationArrivalL="Depart on:"
                  departureDates=" 9 Sep 2021"
                />
              </div>
              <div
                className="self-stretch flex flex-col items-start justify-center gap-[20px] md:w-full"
                id="Prepare Menu"
              >
                <h5
                  className="m-0 self-stretch relative text-inherit tracking-[0.04em] uppercase font-normal font-inherit"
                  id="Prepare for your trip"
                >
                  Prepare for your trip
                </h5>
                <div
                  className="self-stretch flex flex-row flex-wrap items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]"
                  id="Trip Menus"
                >
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/hotel-icon.svg"
                    />
                    <h6
                      className="m-0 relative text-mini tracking-[0.04em] font-normal font-components-button-large text-gray-100 text-left"
                      id="Hotel"
                    >
                      Hotel
                    </h6>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/attractions-icon@2x.png"
                    />
                    <h6
                      className="m-0 relative text-mini tracking-[0.04em] font-normal font-components-button-large text-gray-100 text-center"
                      id="Attractions"
                    >
                      Attractions
                    </h6>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/eats-icon.svg"
                    />
                    <h6
                      className="m-0 relative text-mini tracking-[0.04em] font-normal font-components-button-large text-gray-100 text-center"
                      id="Eats"
                    >
                      Eats
                    </h6>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/commute-icon@2x.png"
                    />
                    <h6
                      className="m-0 relative text-mini tracking-[0.04em] font-normal font-components-button-large text-gray-100 text-center"
                      id="Commute"
                    >
                      Commute
                    </h6>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/taxi-icon@2x.png"
                    />
                    <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[32.12px]">
                      Taxi
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/movies-icon@2x.png"
                    />
                    <h6
                      className="m-0 relative text-mini tracking-[0.04em] font-normal font-components-button-large text-gray-100 text-center"
                      id="Movies"
                    >
                      Movies
                    </h6>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PopDestinationsMainContainer />
        <RecommendedHolidaysCard />
        <PopularStaysContainer1 />
      </section>
      <FormContainer1 />
    </div>
  );
};

export default Homepage;
