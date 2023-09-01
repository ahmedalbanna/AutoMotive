import { useMemo } from "react";
import Video from "./video";

const PopularStaysContainer = ({
  imageDimensions,
  accommodationType,
  accommodationImageUrl,
  pricePerNight,
  roomDimensions,
  rating,
  reviewCount,
  propFlex,
  propGap,
  propFlexDirection,
  propPosition,
  propZIndex,
  propPosition1,
  propFlexShrink,
  propMargin,
  propTop,
  propLeft,
  propZIndex1,
}) => {
  const stayDetailsStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const ratingStyle = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
      position: propPosition,
    };
  }, [propFlexDirection, propPosition]);

  const starsStyle = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  const reviewsStyle = useMemo(() => {
    return {
      position: propPosition1,
      flexShrink: propFlexShrink,
      margin: propMargin,
      top: propTop,
      left: propLeft,
      zIndex: propZIndex1,
    };
  }, [
    propPosition1,
    propFlexShrink,
    propMargin,
    propTop,
    propLeft,
    propZIndex1,
  ]);

  return (
    <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 text-left text-base text-darkslategray-400 font-components-button-large md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
      <div className="self-stretch flex-1 rounded-3xs bg-primary-contrast box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro-200 hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt=""
          src={imageDimensions}
        />
        <div
          className="self-stretch flex flex-row items-start justify-start gap-[11px]"
          style={stayDetailsStyle}
        >
          <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch relative tracking-[0.02em] text-gray-100">
              {accommodationType}
            </div>
            <h3 className="m-0 self-stretch relative text-3xl tracking-[0.04em] capitalize font-bold font-inherit sm:text-xl">
              {accommodationImageUrl}
            </h3>
            <div className="self-stretch relative text-lg tracking-[0.04em]">
              {pricePerNight}
            </div>
          </div>
          <Video />
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-start gap-[9px]"
          style={ratingStyle}
        >
          <div
            className="flex flex-row items-start justify-start gap-[4px]"
            style={starsStyle}
          >
            <img
              className="relative w-[16.64px] h-[17.19px]"
              alt=""
              src={roomDimensions}
            />
            <div className="relative tracking-[0.04em] font-medium">
              {rating}
            </div>
          </div>
          <div
            className="relative tracking-[0.04em] text-cornflowerblue-100 inline-block w-[216.37px] shrink-0"
            style={reviewsStyle}
          >
            {reviewCount}
          </div>
        </div>
        <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
          <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-100 text-left">
            More details
          </div>
        </button>
      </div>
    </div>
  );
};

export default PopularStaysContainer;
