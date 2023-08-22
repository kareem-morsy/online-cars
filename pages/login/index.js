import React from "react";
import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import LoginForm from "../../src/themeComponents/login/login1";
import FooterSection from "../../src/themeComponents/footers/footer1";

const Login = () => {
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
      <LoginForm />
      <FooterSection />
    </>
  );
};

export default Login;
