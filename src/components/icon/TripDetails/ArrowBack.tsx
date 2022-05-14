import React, { FC } from "react";

interface Iicon {
  width?: number;
  height?: number;
  fill?: string;
}

const ArrowBack: FC<Iicon> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6373 20C10.6373 17.8073 10.6373 15.3821 10.6373 12.8239C17.1379 12.8239 23.5342 12.8239 30 12.8239C30 11.0299 30 9.36877 30 7.57475C23.6732 7.57475 17.2769 7.57475 10.6721 7.57475C10.6721 4.91694 10.6721 2.42525 10.6721 0C7.05678 3.3887 3.47625 6.77741 1.90735e-06 10.0664C3.44148 13.2558 7.05678 16.6445 10.6373 20Z"
        fill={fill}
      />
    </svg>
  );
};

ArrowBack.defaultProps = {
  width: 30,
  height: 20,
  fill: "#FFA800",
};

export default React.memo(ArrowBack);
