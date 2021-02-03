import "./tags.css";
import { tagsList } from "../Data/Data";

export const Tags = () => {
  return (
    <div className="tags">
      {tagsList.map((tag) => (
        <span className="tag-item" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};
