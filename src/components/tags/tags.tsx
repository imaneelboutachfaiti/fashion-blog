import { Fragment } from "react";
import "./tags.css";

const tags = [
  "Business",
  "Freelance",
  "Money",
  "Experience",
  "Lifestyle",
  "SEO",
  "Wordpress",
  "Marketing",
  "UX",
  "Modern",
  "Success",
  "Nature",
];
export const Tags = () => {
  const tagsList = (
    <div className="tags">
      {tags.map((tag) => (
        <span className="tag-item" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
  return <Fragment>{tagsList}</Fragment>;
};
