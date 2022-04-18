import React, { FC } from "react";

interface Iicon {
  width?: number;
  height?: number;
  fill?: string;
  background?: string;
  border?: string;
  inactive?: boolean;
  selected?: boolean;
  hover?: boolean;
}

const Coffee: FC<Iicon> = ({
  width,
  height,
  fill,
  background,
  border,
  inactive,
  selected,
  hover,
}) => {
  if (inactive) {
    fill = "#928F94";
    background = "#FCDC9D";
    border = "#FCDC9D";
  }
  if (selected) {
    fill = "#F4F2F6";
    background = "#FDB935";
    border = "#FDB935";
  }
  if (hover) {
    fill = "#292929";
    background = "#FFA800";
    border = "#292929";
  }
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="35"
        height="33.1053"
        rx="4.5"
        fill={background}
        stroke={border}
      />
      <path
        d="M10.3989 8.52637C10.6596 8.52637 10.8493 8.52637 11.039 8.52637C15.7804 8.52637 20.5219 8.52637 25.2633 8.52637C26.745 8.52637 27.4681 9.25024 27.4681 10.7573C27.4681 11.5643 27.48 12.3831 27.4681 13.19C27.4562 14.3767 26.6739 15.1599 25.5004 15.1718C24.9077 15.1837 24.3269 15.1718 23.6868 15.1718C23.6868 16.0974 23.6868 16.9518 23.6868 17.8181C23.6749 20.1915 22.0747 21.8053 19.7158 21.8172C17.9378 21.8172 16.1597 21.8291 14.3817 21.8172C12.0465 21.8053 10.4226 20.2033 10.4226 17.8774C10.387 14.7802 10.3989 11.7067 10.3989 8.52637ZM23.7223 10.4369C23.7223 11.3625 23.7223 12.3 23.7223 13.2375C24.3387 13.2375 24.9314 13.2375 25.5241 13.2375C25.5241 12.2882 25.5241 11.3625 25.5241 10.4369C24.9077 10.4369 24.3387 10.4369 23.7223 10.4369Z"
        fill={fill}
      />
      <path
        d="M25.5363 23.7515C25.5363 24.3685 25.5363 24.9619 25.5363 25.579C19.8584 25.579 14.2043 25.579 8.52637 25.579C8.52637 24.9619 8.52637 24.3804 8.52637 23.7515C14.1805 23.7515 19.8347 23.7515 25.5363 23.7515Z"
        fill={fill}
      />
    </svg>
  );
};

Coffee.defaultProps = {
  width: 35,
  height: 36,
  fill: "#292929",
  background: "#FFFFFF",
  border: "#292929",
};

export default React.memo(Coffee);
