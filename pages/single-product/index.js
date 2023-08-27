import { NextSeo } from "next-seo";
import { FormattedMessage, useIntl } from "react-intl";
import Header from "./../../src/themeComponents/headers/header1/index";
import Footer from "./../../src/themeComponents/footers/footer1/index";
import BreadCramb from "./../../src/themeComponents/breadcrumbs/breadcrumbs1/index";
import ProductDetails from './../../src/themeComponents/single-product/single-product1/index';

const SingleProduct = () => {
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
      <ProductDetails/>
      <Footer />
    </>
  );
};

export default SingleProduct;
