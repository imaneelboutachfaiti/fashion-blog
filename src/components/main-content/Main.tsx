import contentImage from "../main-content/content-image.png";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <div>
        <img className="content-image" src={contentImage} alt="content-image" />
      </div>
    </main>
  );
};
