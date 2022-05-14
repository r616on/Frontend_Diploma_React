import React, { FC } from "react";

interface Iicon {
  width?: number;
  height?: number;
  stroke?: string;
}

const MinusIcon: FC<Iicon> = ({ width, height, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        rx="4"
        stroke={stroke}
        strokeWidth="2"
      />
      <line
        x1="5.61523"
        y1="9.76929"
        x2="14.3845"
        y2="9.76929"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

MinusIcon.defaultProps = {
  width: 20,
  height: 20,
  stroke: "#C4C4C4",
};

export default React.memo(MinusIcon);
