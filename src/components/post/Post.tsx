import { FC, Fragment } from "react";
import "./Post.css";

interface props {
  category: string;
  title: string;
  date: string;
  author: string;
  image: string;
  highlighted: boolean;
  comments?: string;
  paragraph?: string;
}

export const Post: FC<props> = ({
  highlighted,
  paragraph,
  category,
  comments,
  date,
  author,
  image,
  title,
}) => {
  const className = highlighted ? "highlighted-post" : "post-content";
  const displayClass = comments && paragraph ? "visible" : "hidden";
  const contentPadding = highlighted ? "content" : "";
  return (
    <div className={className}>
      <img src={image} alt="post-image" />
      <div className={contentPadding}>
        <span className="category">{category}</span>
        <h2>{title}</h2>
        <div className="description">
          <span>{date}</span>
          <div>
            <span className="signature">By </span>
            <span>{author}</span>
          </div>
          <div className={displayClass}>
            <span>{comments}</span>
          </div>
        </div>
        <p className={displayClass + " paragraph"}>{paragraph}</p>
      </div>
    </div>
  );
};
