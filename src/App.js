import React, { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./Components/Paginate";
import axios from "axios";
import Posts from "./Components/Posts";

const App = () => {
  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const getData = async () => {
    try {
      const data = await axios.get(
        "https://cdn.crediwatch.com/assets/json/ews_score.json"
      );
      console.log(data.data.data);
      setInfo(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    //when the component gets mounted it retrieves the data through network call.
  }, []);

  //GetCurrentRows
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = info.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table>
        <thead>
          <tr className="tableBody">
            <th></th>
            <th>Company</th>
            <th>Financial Risk Score</th>
            <th>Public Data Score</th>
            <th>Private Risk Score</th>
            <th>Overall Risk</th>
          </tr>
        </thead>
        <Posts info={currentPosts} />
      </table>
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={info.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
