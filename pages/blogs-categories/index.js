import React from "react";
import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";
import Features from "../../src/themeComponents/features/features1";
import FooterSection from "../../src/themeComponents/footers/footer1";
import NewsLetter from "./../../src/themeComponents/news-letter/news-letter1/index";
import BlogsCategories from './../../src/themeComponents/blog-categories/blog-categories1/index';

const BlogsCate = () => {
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
      <BreadCramb />
      <BlogsCategories />
      <NewsLetter />
      <Features />
      <FooterSection />
    </>
  );
};

export default BlogsCate;
