import { NextSeo } from "next-seo";
import { FormattedMessage, useIntl } from "react-intl";
import Header from './../../src/themeComponents/headers/header1/index';
import Footer from './../../src/themeComponents/footers/footer1/index';
import BreadCramb from './../../src/themeComponents/breadcrumbs/breadcrumbs1/index';
import ChangePass from './../../src/themeComponents/changePass/changePass1/index';


const ChangePassword = () => {
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
      <ChangePass/>
      <Footer/>
    </>
  );
};

export default ChangePassword;
