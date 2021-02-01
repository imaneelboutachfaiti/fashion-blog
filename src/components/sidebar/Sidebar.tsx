import "./Sidebar.css";
import { Button } from "../button/Button";
import authorImage from "../../images/author.png";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button ButtonText="About the author" ButtonType="WhiteButton" />
      <div className="sidebar-box">
        <img src={authorImage} />
        <div className="box-content">
          <span className="author-name">Kate Willems</span>
          <span className="speciality">Food & cooking bloger</span>
          <p className="author-paragraph">
            Hi, I'm Sonia. Cooking is the way I express my creative side to the
            world. Welcome to my Kitchen Corner on…
          </p>
        </div>
        <Button ButtonText="Continue Reading" ButtonType="ReadingButton" />
      </div>
    </div>
  );
};
