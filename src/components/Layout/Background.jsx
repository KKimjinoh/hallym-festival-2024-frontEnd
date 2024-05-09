import React from "react";
import "./Background.css";
import logo1 from "../../assets/logo1.png";

const Background = ({ hasLogo }) => {
  return (
    <div className="backgroundStyle">
      {/* hasLogo 값이 true일 때만 로고를 표시 */}
      {hasLogo && (
        <div className="logo1">
          <img src={logo1} alt="logo1" />
        </div>
      )}
    </div>
  );
};

export default Background;
