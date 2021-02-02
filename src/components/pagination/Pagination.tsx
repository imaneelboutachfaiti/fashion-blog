import { isPropertySignature } from "typescript";

import { FC } from "react";
import { count } from "console";
import "./Pagination.css";
interface props {
  count: number;
}
export const Pagination: FC<props> = (props) => {
  const pages = Array.from(Array(props.count).keys());
  return (
    <div className="pagination-section">
      <div className="pagination">
        <button className="older-post pagination-button">
          <span className="previous-arrow">&#60;</span> older post
        </button>
        {pages.map((page) => (
          <button className="pagination-button" key={page}>
            {page + 1}
          </button>
        ))}
        <button className="pagination-button">
          next post <span className="next-arrow">&#62;</span>{" "}
        </button>
      </div>
    </div>
  );
};
