import React from "react";
import "./Header.scss";
import cup from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="img">
        <img src={cup} alt="Logo" />
      </div>
      <div className="header">
        <h1 dir="rtl">
          كأس <br />
          <span dir="rtl">العالم</span>
        </h1>
      </div>
    </>
  );
};

export default Header;
