import React from "react";
import WebsiteProfile from "../containers/websiteProfile";
import WebsitePortfolio from "../containers/websitePortfolio"

import AboutSecondSection from "../containers/aboutSecondSection";

const Main = () => {
  return (
    <>
      <title>AugusDev | Main</title>
      <WebsiteProfile />
       {/* Seccion de "Sobre mi"*/}
      <AboutSecondSection />
      {/* Seccion de "Portfolio"*/}
      <WebsitePortfolio />
    </>
  );
};

export default Main;
