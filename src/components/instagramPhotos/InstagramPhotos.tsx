import photo1 from "../../images/photo1.png";
import photo2 from "../../images/photo2.png";
import photo3 from "../../images/photo3.png";
import photo4 from "../../images/photo4.png";
import photo5 from "../../images/photo5.png";
import photo6 from "../../images/photo6.png";
import "./InstagramPhotos.css";

export const InstagramPhotos = () => {
  return (
    <div className="instagram-photos">
      <p className="photos-paragraph">Follow our @instagram_name</p>
      <div className="photos-section">
        <img src={photo1} alt="photo1" />
        <img src={photo2} alt="photo2" />
        <img src={photo3} alt="photo3" />
        <img src={photo4} alt="photo4" />
        <img src={photo5} alt="photo5" />
        <img src={photo6} alt="photo6" />
      </div>
    </div>
  );
};
