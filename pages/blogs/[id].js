import { NextSeo } from "next-seo";
import { FormattedMessage, useIntl } from "react-intl";
import Header from "./../../src/themeComponents/headers/header1/index";
import Footer from "./../../src/themeComponents/footers/footer1/index";
import BreadCramb from "./../../src/themeComponents/breadcrumbs/breadcrumbs1/index";
import BlogsComponent from "./../../src/themeComponents/blogs/blogs1/index";
import SingleBlog from './../../src/themeComponents/single-blog/single-blog1/index';

const Blog = () => {
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

      <Header />
      <BreadCramb pageName={<FormattedMessage id="categories" />} />
      <SingleBlog/>
      <Footer />
    </>
  );
};

export default Blog;
