import { useMemo } from "react";

const FormContainer = ({ parisImage, paris, prop, propDisplay, propWidth }) => {
  const divStyle = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth,
    };
  }, [propDisplay, propWidth]);

  return (
    <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
      <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-center justify-center relative gap-[10px]">
        <img
          className="relative w-72 h-[182px] object-cover z-[0]"
          alt=""
          src={parisImage}
        />
        <div className="my-0 mx-[!important] absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row py-2 px-3 box-border items-start justify-start z-[1]">
          <b className="flex-1 relative text-xl tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
            {paris}
          </b>
          <div className="flex flex-col items-end justify-start gap-[2px]">
            <div className="relative text-base tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[52.53px]">
              from
            </div>
            <div
              className="relative text-19xl leading-[38px] font-baloo-bhai text-primary-contrast text-right inline-block w-[90.92px]"
              style={divStyle}
            >
              {prop}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default FormContainer;
