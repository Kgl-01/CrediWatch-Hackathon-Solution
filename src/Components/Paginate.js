import * as React from "react";
import "./Paginate.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a onClick={() => paginate(number)} href="!#">
                <button className="navigate"> {number}</button>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
