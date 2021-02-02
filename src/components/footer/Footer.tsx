import { Logo } from "../logo/Logo";
import "./Footer.css";
import { navigationList } from "../Data/Data";
import { iconsList } from "../Data/Data";

export const Footer = () => {
  return (
    <div className="footer-section">
      <Logo />
      <nav className="navigation-bar">
        {navigationList.map((item) => (
          <a key={item}> {item}</a>
        ))}
      </nav>
      <div className="icons-list">
        {iconsList.map((item) => (
          <img key={item} src={item} />
        ))}
      </div>
      <p className="copyright">@2019 Logwork. All Right Reserved.</p>
    </div>
  );
};
