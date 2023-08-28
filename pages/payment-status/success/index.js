import { NextSeo } from "next-seo";
import { FormattedMessage, useIntl } from "react-intl";
import Header from "../../../src/themeComponents/headers/header1/index";
import Footer from "../../../src/themeComponents/footers/footer1/index";
import BreadCramb from "../../../src/themeComponents/breadcrumbs/breadcrumbs1/index";
import SucessOrder from "../../../src/themeComponents/payment-status/payment-status1";

const SuccessPayment = () => {
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
      <SucessOrder/>
      <Footer />
    </>
  );
};

export default SuccessPayment;
