import { useCallback } from "react";
import PopularStaysContainer from "./popular-stays-container";

const PopularStaysContainer1 = () => {
  const onViewAllStaysButtonClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-left text-11xl text-darkslategray-400 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 flex flex-row items-center justify-center">
          <h2 className="m-0 relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit inline-block w-[1105.34px] shrink-0 sm:text-3xl">
            Popular Stays
          </h2>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl flex flex-row items-start justify-start gap-[10px] md:hidden"
          onClick={onViewAllStaysButtonClick}
        >
          <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-200 text-right inline-block w-[140.66px] shrink-0">
            View all stays
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/arrowright4.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] text-base lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
        <PopularStaysContainer
          imageDimensions="/unsplashrlwe8f8anoc@2x.png"
          accommodationType="Entire bungalow"
          accommodationImageUrl="Matterhorn Suites"
          pricePerNight="$575/night"
          roomDimensions="/vector.svg"
          rating="4.9"
          reviewCount="(60 reviews)"
        />
        <PopularStaysContainer
          imageDimensions="/unsplashtsn8bpopveo@2x.png"
          accommodationType="2-Story beachfront suite"
          accommodationImageUrl="Discovery Shores"
          pricePerNight="$360/night"
          roomDimensions="/vector1.svg"
          rating="4.8"
          reviewCount="(116 reviews)"
          propFlex="1"
          propGap="11px"
          propFlexDirection="row"
          propPosition="unset"
          propZIndex="unset"
          propPosition1="relative"
          propFlexShrink="0"
          propMargin="unset"
          propTop="unset"
          propLeft="unset"
          propZIndex1="unset"
        />
        <PopularStaysContainer
          imageDimensions="/unsplashrlwe8f8anoc1@2x.png"
          accommodationType="Single deluxe hut"
          accommodationImageUrl="Arctic Hut "
          pricePerNight="$420/night"
          roomDimensions="/vector2.svg"
          rating="4.7"
          reviewCount="(78 reviews)"
          propFlex="1"
          propGap="5px"
          propFlexDirection="column"
          propPosition="relative"
          propZIndex="0"
          propPosition1="absolute"
          propFlexShrink="unset"
          propMargin="0 !important"
          propTop="0px"
          propLeft="53.73px"
          propZIndex1="1"
        />
        <PopularStaysContainer
          imageDimensions="/unsplashyqrybvxug5q@2x.png"
          accommodationType="Deluxe King Room"
          accommodationImageUrl="Lake Louise Inn"
          pricePerNight="$244/night"
          roomDimensions="/vector3.svg"
          rating="4.6"
          reviewCount="(63 reviews)"
          propFlex="unset"
          propGap="11px"
          propFlexDirection="row"
          propPosition="unset"
          propZIndex="unset"
          propPosition1="relative"
          propFlexShrink="0"
          propMargin="unset"
          propTop="unset"
          propLeft="unset"
          propZIndex1="unset"
        />
      </div>
      <div className="rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-200 md:flex md:mt-4">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[140.66px] shrink-0 md:w-auto">
          View all stays
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowright5.svg"
        />
      </div>
    </div>
  );
};

export default PopularStaysContainer1;
