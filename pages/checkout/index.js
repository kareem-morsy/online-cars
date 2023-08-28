import { NextSeo } from "next-seo";
import { FormattedMessage, useIntl } from "react-intl";
import Header from "./../../src/themeComponents/headers/header1/index";
import Footer from "./../../src/themeComponents/footers/footer1/index";
import BreadCramb from "./../../src/themeComponents/breadcrumbs/breadcrumbs1/index";
import CheckOut from './../../src/themeComponents/checkout/checkout1/index';

const CheckOutPage = () => {
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
      <CheckOut />
      <Footer />

    </>
  );
};

export default CheckOutPage;
