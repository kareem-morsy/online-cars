import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import FooterSection from "../../src/themeComponents/footers/footer1";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";
import CheckOut from "../../src/themeComponents/checkOut/checkOut1";
import { FormattedMessage } from "react-intl";

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

      <Header2 />
      <BreadCramb pageName={<FormattedMessage id="salla" />} />
      <CheckOut />
      <FooterSection />
    </>
  );
};

export default CheckOutPage;
