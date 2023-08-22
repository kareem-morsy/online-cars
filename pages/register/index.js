import React from 'react'
import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import RegisterForm from '../../src/themeComponents/registerForm/registerForm1'
import FooterSection from "../../src/themeComponents/footers/footer1";

const Register = () => {
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
      <RegisterForm/>
      <FooterSection />
    </>
    
  )
}

export default Register