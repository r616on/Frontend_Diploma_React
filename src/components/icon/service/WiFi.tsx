import React, { FC } from "react";
import { IiconService } from "./interfaces";

const WiFi: FC<IiconService> = ({
  width,
  height,
  fill,
  background,
  border,
  inactive,
  active,
  hover,
}) => {
  if (inactive) {
    fill = "#928F94";
    background = "#FCDC9D";
    border = "#FCDC9D";
  }
  if (!inactive) {
    if (active) {
      fill = "#F4F2F6";
      background = "#FDB935";
      border = "#FDB935";
    }
    if (hover) {
      fill = "#292929";
      background = "#FFA800";
      border = "#292929";
    }
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
        d="M27.4737 13.4662C27.2528 13.6749 27.0318 13.8837 26.8171 14.0988C26.6024 14.3139 26.4004 14.5416 26.1731 14.7883C23.8686 12.5552 21.16 11.3785 17.9906 11.3785C14.8337 11.3785 12.1378 12.5552 9.89644 14.7251C9.44817 14.2822 9.01883 13.8521 8.52637 13.3586C9.20825 12.8272 9.87118 12.2262 10.6099 11.7328C15.8692 8.24078 22.6501 8.84809 27.2338 13.2005C27.3096 13.2701 27.3917 13.3333 27.4737 13.3966C27.4737 13.4219 27.4737 13.4409 27.4737 13.4662Z"
        fill={fill}
      />
      <path
        d="M17.6873 24.4735C17.6052 24.4356 17.5232 24.3913 17.4348 24.3533C16.7655 24.0687 16.393 23.3665 16.5319 22.6516C16.6708 21.9431 17.2959 21.4307 18.0219 21.4307C18.7417 21.437 19.3668 21.9557 19.4993 22.6643C19.6319 23.3728 19.2468 24.075 18.5712 24.3533C18.4828 24.3913 18.4008 24.4292 18.3124 24.4672C18.104 24.4735 17.8957 24.4735 17.6873 24.4735Z"
        fill={fill}
      />
      <path
        d="M12.5606 17.401C12.1123 16.9582 11.683 16.5343 11.2537 16.1041C14.5178 12.5615 20.8505 12.0934 24.7397 16.0662C24.304 16.4963 23.8621 16.9265 23.4138 17.3694C21.9364 15.9523 20.1244 15.1552 17.9904 15.1615C15.8627 15.1679 14.0569 15.9586 12.5606 17.401Z"
        fill={fill}
      />
      <path
        d="M22.1069 18.7674C21.6586 19.2102 21.2293 19.6404 20.8 20.0642C19.1142 18.47 16.6834 18.6408 15.225 20.0579C14.7956 19.6277 14.3663 19.2039 13.9307 18.7737C15.6606 16.743 19.6319 16.2306 22.1069 18.7674Z"
        fill={fill}
      />
    </svg>
  );
};

WiFi.defaultProps = {
  width: 35,
  height: 36,
  fill: "#292929",
  background: "#FFFFFF",
  border: "#292929",
};

export default React.memo(WiFi);