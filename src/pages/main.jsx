import React from "react";
import WebsiteProfile from "../containers/websiteProfile";
import WebsitePortfolio from "../containers/websitePortfolio"
import CertificateSection from "../containers/certificateSection";

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
      <CertificateSection />
    </>
  );
};

export default Main;
