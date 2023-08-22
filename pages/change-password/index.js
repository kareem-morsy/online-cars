import React from "react";
import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import ChangePass from "../../src/themeComponents/changePass/changePass1";
import FooterSection from "../../src/themeComponents/footers/footer1";


const ChangePassword = () => {
  return (
    <>
      <NextSeo
        title=""
        additionalMetaTags={[
          {
            name: "keywords",
            content: "",
          },
          {
            name: "description",
            content: "",
          },
        ]}
      />
      <Header2 />
      <ChangePass/>
      <FooterSection />
    </>
  );
};

export default ChangePassword;
