import React from "react";
import HeaderStyle from "./Header.module.scss";

function Header({ categories, title }) {
  return (
    <div className={HeaderStyle.header}>
      <h1 className={HeaderStyle.title}>{title}</h1>
      <div className={HeaderStyle.button}>
        {categories.map((item, index) => (
          <button key={index}>{item.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );
}

export default Header;
