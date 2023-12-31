import { NextSeo } from "next-seo";
import { FormattedMessage, useIntl } from "react-intl";
import Header from './../../src/themeComponents/headers/header1/index';
import Footer from './../../src/themeComponents/footers/footer1/index';
import BreadCramb from './../../src/themeComponents/breadcrumbs/breadcrumbs1/index';
import Salla from './../../src/themeComponents/carts/cart1/index';

const Cart = () => {
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
      <Salla />

      <Footer />
    </>
  );

  
};

export default Cart;
