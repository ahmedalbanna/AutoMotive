import { useMemo } from "react";

const TopHeader = ({ locoUILogo, locoUI, topHeaderAlignSelf }) => {
  const topHeaderStyle = useMemo(() => {
    return {
      alignSelf: topHeaderAlignSelf,
    };
  }, [topHeaderAlignSelf]);

  return (
    <header
      className="sticky bg-primary-contrast w-full h-[77px] flex flex-row py-[22px] px-20 box-border items-center justify-center top-[0] [background:white] text-left text-[11.04px] text-studio-darkmode-popuplabels-5e6a86 font-text-small lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border"
      id="Top Header"
      style={topHeaderStyle}
    >
      <div
        className="flex-1 flex flex-row flex-wrap items-center justify-between"
        id="Top Container"
      >
        <div
          className="flex flex-row items-center justify-start gap-[10.03px]"
          id="LocoUI-Logo"
        >
          <img
            className="relative rounded-[8.03px] w-[34.12px] h-[34.12px] overflow-hidden shrink-0"
            alt=""
            src={locoUILogo}
          />
          <div
            className="flex flex-col items-start justify-center gap-[4.01px]"
            id="Name"
          >
            <img
              className="relative w-[57.46px] h-[13.6px]"
              alt=""
              src={locoUI}
            />
            <h4
              className="m-0 relative text-inherit tracking-[-0.04em] font-normal font-inherit"
              id="subtage"
            >
              by Team Locofy
            </h4>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
          <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
            <button className="cursor-pointer py-1.5 px-4 bg-[transparent] rounded-md overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-royalblue hover:bg-gainsboro-100">
              <div className="relative text-xs leading-[20px] font-text-small text-royalblue text-center">
                Explore
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-1.5 px-4 bg-[transparent] rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-gainsboro-100">
              <div className="relative text-xs leading-[20px] font-text-small text-darkslategray-300 text-center">
                Search
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-1.5 px-4 bg-[transparent] rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-gainsboro-100">
              <div className="relative text-xs leading-[20px] font-text-small text-darkslategray-300 text-center">
                Hotels
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-1.5 px-4 bg-[transparent] rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-gainsboro-100">
              <div className="relative text-xs leading-[20px] font-text-small text-darkslategray-300 text-center">
                Offers
              </div>
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden md:flex"
              alt=""
              src="/notification.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/notification1.svg"
            />
            <img
              className="rounded-19xl w-9 h-9 object-cover"
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
