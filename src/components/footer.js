import { useMemo } from "react";

const Footer = ({
  dimensionCode,
  dimensionCodeText,
  dimensionText,
  dimensionValue,
  dimensionCodeImageUrl,
  footerPosition,
}) => {
  const footerStyle = useMemo(() => {
    return {
      position: footerPosition,
    };
  }, [footerPosition]);

  return (
    <footer
      className="relative bg-royalblue w-[1440px] flex flex-row py-[33px] px-[84px] box-border items-start justify-start gap-[44px] text-left text-[16.82px] text-studio-darkmode-enabledlabel-e8effd font-text-small lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border"
      style={footerStyle}
    >
      <div
        className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch"
        id="FickleFlight Bio"
      >
        <div
          className="flex flex-row items-center justify-start gap-[15.29px]"
          id="LocoUI-Logo"
        >
          <img
            className="relative rounded-[12.23px] w-[52px] h-[52px] overflow-hidden shrink-0"
            alt=""
            src={dimensionCode}
          />
          <div className="flex flex-col items-start justify-center gap-[6.12px]">
            <img
              className="relative w-[87.58px] h-[20.73px]"
              alt=""
              src={dimensionCodeText}
            />
            <div className="relative tracking-[-0.04em]">by Team Locofy</div>
          </div>
        </div>
        <div className="self-stretch relative text-lg leading-[27px] font-components-button-large text-primary-contrast">
          Clean, responsive UI library that works out of the box with Locofy.ai
        </div>
        <div className="relative w-[130px] h-[30px]" id="Social Icons">
          <a
            className="[text-decoration:none] absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden"
            href="https://facebook.com"
          >
            <img
              className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={dimensionText}
            />
          </a>
          <a
            className="[text-decoration:none] absolute top-[0px] left-[50px] w-[30px] h-[30px] overflow-hidden"
            href="https://instagram.com"
            target="_blank"
          >
            <img
              className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={dimensionValue}
            />
          </a>
          <a
            className="[text-decoration:none] absolute top-[0px] left-[100px] w-[30px] h-[30px] overflow-hidden"
            href="https://twitter.com"
          >
            <img
              className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={dimensionCodeImageUrl}
            />
          </a>
        </div>
      </div>
      <div className="relative box-border w-px h-[157.87px] border-r-[1px] border-solid border-gray-300 md:hidden" />
      <div
        className="flex-1 flex flex-row items-start justify-start gap-[10px] text-base text-primary-contrast font-components-button-large md:flex-[unset] md:self-stretch sm:flex-col"
        id="Footer Links"
      >
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:mb-[40px!important] sm:flex-[unset] sm:self-stretch"
          id="Company"
        >
          <h3
            className="m-0 self-stretch relative text-xl leading-[27px] font-medium font-inherit"
            id="Company"
          >
            Company
          </h3>
          <li className="self-stretch relative" id="About Us">
            About Us
          </li>
          <li className="self-stretch relative" id="News">
            News
          </li>
          <li className="self-stretch relative" id="Careers">
            Careers
          </li>
          <li className="self-stretch relative" id="How we work">
            How we work
          </li>
        </div>
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:mb-[40px!important] sm:flex-[unset] sm:self-stretch"
          id="Support"
        >
          <h3
            className="m-0 self-stretch relative text-xl leading-[27px] font-medium font-inherit"
            id="Support"
          >
            Support
          </h3>
          <li className="self-stretch relative" id="Account">
            Account
          </li>
          <li className="self-stretch relative" id="Support Center">
            Support Center
          </li>
          <li className="self-stretch relative" id="FAQ">
            FAQ
          </li>
          <li className="self-stretch relative" id="Accessibility">
            Accessibility
          </li>
        </div>
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:flex-[unset] sm:self-stretch"
          id="More"
        >
          <h3
            className="m-0 self-stretch relative text-xl leading-[27px] font-medium font-inherit"
            id="More"
          >
            More
          </h3>
          <li className="self-stretch relative" id="Covid Advisory">
            Covid Advisory
          </li>
          <li className="self-stretch relative" id="Airline Fees">
            Airline Fees
          </li>
          <li className="self-stretch relative" id="Tips">
            Tips
          </li>
          <li className="self-stretch relative" id="Quarantine Rules">
            Quarantine Rules
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
