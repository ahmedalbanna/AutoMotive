import FormContainer from "./form-container";

const PopDestinationsMainContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-lg text-cornflowerblue-200 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px] sm:flex-[unset] sm:self-stretch">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Plan your next trip
          </b>
          <h2 className="m-0 self-stretch relative text-11xl tracking-[0.04em] capitalize font-bold font-inherit text-darkslategray-400 sm:text-3xl">
            Most Popular Destinations
          </h2>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl flex flex-row items-start justify-start gap-[10px] md:hidden">
          <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-200 text-right inline-block w-[197.33px] shrink-0">
            View all destinations
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/arrowright.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
        <FormContainer
          parisImage="/parisimage@2x.png"
          paris="Paris"
          prop="$699"
        />
        <FormContainer
          parisImage="/greeceimage@2x.png"
          paris="Greece"
          prop="$1079"
          propDisplay="inline-block"
          propWidth="unset"
        />
        <FormContainer
          parisImage="/norwayimage@2x.png"
          paris="Norway"
          prop="$895"
          propDisplay="inline-block"
          propWidth="90.92px"
        />
        <FormContainer
          parisImage="/tuscanyimage@2x.png"
          paris="Tuscany"
          prop="$1245"
          propDisplay="inline-block"
          propWidth="100.62px"
        />
      </div>
      <div className="rounded-12xl bg-primary-contrast w-[231.38px] hidden flex-row items-start justify-start gap-[10px] text-right md:flex md:mt-4">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[197.33px] shrink-0 md:w-auto">
          View all destinations
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowright1.svg"
        />
      </div>
    </div>
  );
};

export default PopDestinationsMainContainer;
