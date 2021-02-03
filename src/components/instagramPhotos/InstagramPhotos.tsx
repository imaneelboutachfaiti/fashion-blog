import { instagramPothos } from "../Data/Data";
import "./InstagramPhotos.css";

export const InstagramPhotos = () => {
  return (
    <div className="instagram-photos">
      <p className="photos-paragraph">Follow our @instagram_name</p>
      <div className="photos-section">
        {instagramPothos.map((item) => (
          <img src={item} alt="instagram photo" />
        ))}
      </div>
    </div>
  );
};
