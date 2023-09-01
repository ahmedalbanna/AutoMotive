import { useMemo } from "react";

const LocoUILogo = ({
  dimension,
  productDimensions,
  locoUILogoPosition,
  locoUILogoGap,
  locoUILogoIconBorderRadius,
  locoUILogoIconWidth,
  locoUILogoIconHeight,
  locoUIIconWidth,
  locoUIIconHeight,
  byTeamLocofyFontSize,
  byTeamLocofyColor,
  byTeamLocofyMargin,
  byTeamLocofyFontWeight,
}) => {
  const locoUILogoStyle = useMemo(() => {
    return {
      position: locoUILogoPosition,
      gap: locoUILogoGap,
    };
  }, [locoUILogoPosition, locoUILogoGap]);

  const locoUILogoIconStyle = useMemo(() => {
    return {
      borderRadius: locoUILogoIconBorderRadius,
      width: locoUILogoIconWidth,
      height: locoUILogoIconHeight,
    };
  }, [locoUILogoIconBorderRadius, locoUILogoIconWidth, locoUILogoIconHeight]);

  const locoUIIconStyle = useMemo(() => {
    return {
      width: locoUIIconWidth,
      height: locoUIIconHeight,
    };
  }, [locoUIIconWidth, locoUIIconHeight]);

  const byTeamLocofyStyle = useMemo(() => {
    return {
      fontSize: byTeamLocofyFontSize,
      color: byTeamLocofyColor,
      margin: byTeamLocofyMargin,
      fontWeight: byTeamLocofyFontWeight,
    };
  }, [
    byTeamLocofyFontSize,
    byTeamLocofyColor,
    byTeamLocofyMargin,
    byTeamLocofyFontWeight,
  ]);

  return (
    <div
      className="relative flex flex-row items-center justify-start gap-[10px] text-left text-2xs text-studio-darkmode-popuplabels-5e6a86 font-text-small"
      style={locoUILogoStyle}
    >
      <img
        className="relative rounded-5xs w-[34.01px] h-[34.01px] overflow-hidden shrink-0"
        alt=""
        src={dimension}
        style={locoUILogoIconStyle}
      />
      <div className="flex flex-col items-start justify-center gap-[4px]">
        <img
          className="relative w-[57.28px] h-[13.56px]"
          alt=""
          src={productDimensions}
          style={locoUIIconStyle}
        />
        <div className="relative tracking-[-0.04em]" style={byTeamLocofyStyle}>
          by Team Locofy
        </div>
      </div>
    </div>
  );
};

export default LocoUILogo;
