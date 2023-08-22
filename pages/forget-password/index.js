import React from "react";
import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import ForgetPass from "../../src/themeComponents/forget-password/forget-password1";
import FooterSection from "../../src/themeComponents/footers/footer1";


const ForgetPassword = () => {
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
      <ForgetPass />
      <FooterSection />
    </>
  );
};

export default ForgetPassword;
