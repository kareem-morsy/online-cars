import { NextSeo } from "next-seo";
import { FormattedMessage, useIntl } from "react-intl";
import Header from "./../../src/themeComponents/headers/header1/index";
import Footer from "./../../src/themeComponents/footers/footer1/index";
import BreadCramb from "./../../src/themeComponents/breadcrumbs/breadcrumbs1/index";
import ContactUs from "./../../src/themeComponents/contact-us/contactUs1/index";
import RulesComponent from './../../src/themeComponents/privacy-policies/rulesComponent1/index';

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

      <Header />
      <BreadCramb pageName={<FormattedMessage id="categories" />} />
      <RulesComponent/>
      <Footer />
    </>
  );
};

export default Rules;
