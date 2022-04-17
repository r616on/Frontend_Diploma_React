import React, { FC } from "react";

interface Iicon {
  width?: number;
  height?: number;
  fill?: string;
}

const First: FC<Iicon> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 57 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.2258 0L34.8606 19.0776H56.4516L39.0213 30.9224L45.6561 50L28.2258 38.26L10.7955 50L17.4303 30.9224L0 19.0776H21.5911L28.2258 0Z"
        fill={fill}
      />
    </svg>
  );
};

First.defaultProps = {
  width: 57,
  height: 50,
  fill: "#C4C4C4",
};

export default React.memo(First);
