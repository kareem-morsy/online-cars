import { NextSeo } from "next-seo";
import { FormattedMessage, useIntl } from "react-intl";
import Header from './../../src/themeComponents/headers/header1/index';
import Footer from './../../src/themeComponents/footers/footer1/index';
import BreadCramb from './../../src/themeComponents/breadcrumbs/breadcrumbs1/index';
import Products from './../../src/themeComponents/products/products1/index';
const ProductsPage = () => {
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
      <Products/>
      <Footer />
    </>
  );
};

export default ProductsPage;
