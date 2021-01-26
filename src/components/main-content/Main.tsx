import contentImage from "../main-content/content-image.png";
import "./Main.css";

export const Main = () => {
  return (
    <main className="main-content-section">
      <div>
        <img className="content-image" src={contentImage} alt="content-image" />
      </div>
      <div className="main-content">
        <span className="image-text">Vehicle</span>
        <h1 className="main-title">
          One of Saturn’s largest rings may be newer than anyone
        </h1>
        <div className="main-text image-text">
          <span>June 6, 2019</span>
          <span>By Rickie Baroch</span>
          <span>4 comments</span>
        </div>
      </div>
    </main>
  );
};
