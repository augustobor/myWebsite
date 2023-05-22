import React from "react";
import WebsiteProfile from "../containers/websiteProfile";
import WebsitePortfolio from "../containers/websitePortfolio"
import WebsitePosts from "../containers/websitePosts";

const Main = () => {
  return (
    <>
      <title>AugusDev | Main</title>
      <WebsiteProfile />
      <WebsitePortfolio />
      <WebsitePosts />
    </>
  );
};

export default Main;
