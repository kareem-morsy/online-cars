import React from "react";
import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";
import Features from "../../src/themeComponents/features/features1";
import FooterSection from "../../src/themeComponents/footers/footer1";
import NewsLetter from "./../../src/themeComponents/news-letter/news-letter1/index";
import BlogsCategories from "./../../src/themeComponents/blog-categories/blog-categories1/index";
import Categories from "../../src/themeComponents/categories/categories1";
import { FormattedMessage, useIntl } from "react-intl";


const CategoryPage = () => {
    
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
      <BreadCramb pageName={<FormattedMessage id="categories"/>}/>
      <Categories/>
      <NewsLetter />
      <Features />
      <FooterSection />
    </>
  );
};

export default CategoryPage;
