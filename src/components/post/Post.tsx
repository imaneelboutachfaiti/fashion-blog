import { FC } from "react";
import "./Post.css";

interface props {
  category: string;
  title: string;
  date: string;
  author: string;
  image: string;
}

export const Post: FC<props> = (props) => {
  return (
    <div className="post-content">
      <img src={props.image} alt="post-image" />
      <span className="category">{props.category}</span>
      <h2>{props.title}</h2>
      <div className="description">
        <span>{props.date}</span>
        <div>
          <span className="signature">By </span>
          <span>{props.author}</span>
        </div>
      </div>
    </div>
  );
};
