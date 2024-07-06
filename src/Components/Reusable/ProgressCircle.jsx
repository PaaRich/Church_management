/* eslint-disable react/prop-types */
// ProgressCircle.js
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ percentage, text }) => {
  const GradientSVG = () => (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "violet", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(173, 20, 20)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div>
      <GradientSVG />
      <CircularProgressbar
        value={percentage}
        text={text}
        styles={buildStyles({
          textColor: "#000",
          pathColor: "url(#gradient)",
          trailColor: "#d6d6d6",
          textSize: "16px",
        })}
      />
    </div>
  );
};

export default ProgressCircle;
