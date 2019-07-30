import React, { Fragment, useState } from "react";
import axios from "axios";
import Search from "../Layout/Search";
import MapApi from "../MapApi";
import Repo from "./Repo";

const ReposPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [apiData, setApiData] = useState([]);

  const searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${text}&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setApiData(res.data.items);
    setLoaded(true);
  };

  return (
    <Fragment>
      <Search searchUsers={searchUsers} searchType={"Repos"} />
      {loaded && (
        <div className="APIDisplay">
          <MapApi apiData={apiData} Child={Repo} />
        </div>
      )}
    </Fragment>
  );
};

export default ReposPage;
