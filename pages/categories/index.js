import { NextSeo } from "next-seo";
import { FormattedMessage, useIntl } from "react-intl";
import Header from './../../src/themeComponents/headers/header1/index';
import Footer from './../../src/themeComponents/footers/footer1/index';
import BreadCramb from './../../src/themeComponents/breadcrumbs/breadcrumbs1/index';
import Categories from './../../src/themeComponents/categories/categories1/index';

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

      <Header/>
      <BreadCramb pageName={<FormattedMessage id="categories" />} />
      <Categories/>
      
      <Footer/>
    </>
  );
};

export default CategoryPage;
