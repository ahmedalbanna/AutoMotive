import { useMemo } from "react";

const SizesmallStyleStrokeShap = ({
  buttonText,
  sizesmallStyleStrokeShapPosition,
  sizesmallStyleStrokeShapBoxSizing,
  sizesmallStyleStrokeShapBorder,
  buttonColor,
  buttonDisplay,
}) => {
  const sizesmallStyleStrokeShapStyle = useMemo(() => {
    return {
      position: sizesmallStyleStrokeShapPosition,
      boxSizing: sizesmallStyleStrokeShapBoxSizing,
      border: sizesmallStyleStrokeShapBorder,
    };
  }, [
    sizesmallStyleStrokeShapPosition,
    sizesmallStyleStrokeShapBoxSizing,
    sizesmallStyleStrokeShapBorder,
  ]);

  const button1Style = useMemo(() => {
    return {
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonColor, buttonDisplay]);

  return (
    <button
      className="cursor-pointer [border:none] py-1.5 px-4 bg-[transparent] relative rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-gainsboro-100"
      style={sizesmallStyleStrokeShapStyle}
    >
      <div
        className="relative text-xs leading-[20px] font-text-small text-royalblue text-center"
        style={button1Style}
      >
        {buttonText}
      </div>
    </button>
  );
};

export default SizesmallStyleStrokeShap;
