import React from "react";
import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";
import Features from "../../src/themeComponents/features/features1";
import FooterSection from "../../src/themeComponents/footers/footer1";
import Questions from "../../src/themeComponents/questions/questions1";
import { FormattedMessage } from "react-intl";


const CommonQuestions = () => {
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
      <BreadCramb pageName={<FormattedMessage id="commonQues" />}/>
      <Questions/>
      <NewsLetter/>
      <Features />
      <FooterSection />
    </>
  );
};

export default CommonQuestions;
