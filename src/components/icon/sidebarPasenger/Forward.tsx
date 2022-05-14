import React, { FC } from "react";

interface Iicon {
  width?: number;
  height?: number;
  fill?: string;
}

const Forward: FC<Iicon> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0C2.23877 0 0 2.23853 0 5V21C0 23.7615 2.23877 26 5 26H27C29.7612 26 32 23.7615 32 21V5C32 2.23853 29.7612 0 27 0H5ZM17.8369 14.2236V17.3333C19.3442 15.8793 20.8667 14.4108 22.3154 13.0288C20.8521 11.6035 19.3442 10.135 17.8223 8.66663V11.949H9.68408V14.2236H17.8369Z"
        fill={fill}
      />
    </svg>
  );
};

Forward.defaultProps = {
  width: 32,
  height: 26,
  fill: "#FFA800",
};

export default React.memo(Forward);
