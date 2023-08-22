import React from 'react'
import { NextSeo } from "next-seo";
import Header2 from '../../src/themeComponents/headers/header2';
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";
import Features from '../../src/themeComponents/features/features1';
import FooterSection from "../../src/themeComponents/footers/footer1";
import RulesComponent from './../../src/themeComponents/privacy-policies/rulesComponent1/index';
import NewsLetter from './../../src/themeComponents/news-letter/news-letter1/index';
import { FormattedMessage } from "react-intl";


const Rules = () => {
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
          <BreadCramb pageName={<FormattedMessage id="terms" />}/>
          <RulesComponent/>
          <NewsLetter/>
          <Features />
          <FooterSection />
        </>
      );
}

export default Rules