import React from "react";
import { Logo } from "../logo/Logo";
import { navigationList } from "../Data/Data";
import "./Header.css";
export const Header = () => {
  return (
    <header className="header-section">
      <Logo />
      <nav className="header-menu">
        {navigationList.map((item) => (
          <a className="menu-item">{item}</a>
        ))}
      </nav>
    </header>
  );
};
