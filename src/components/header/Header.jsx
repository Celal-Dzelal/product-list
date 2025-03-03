import React from "react";
import HeaderStyle from "./Header.module.scss";

const Header = ({ categories, title }) => {
  return (
    <div className={HeaderStyle.header}>
      <h1>{title}</h1>
      <div className={HeaderStyle.btn}>
        {categories.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
