import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import FooterSection from "../../src/themeComponents/footers/footer1";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";
import Features from "../../src/themeComponents/features/features1";
import ContactUs from "../../src/themeComponents/contact-us/contactUs1";
import NewsLetter from "../../src/themeComponents/news-letter/news-letter1";
import { FormattedMessage } from "react-intl";


const Contact = () => {
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
      <BreadCramb pageName={<FormattedMessage id="contact" />}/>
      <ContactUs/>
      <NewsLetter/>
      <Features/>
      <FooterSection />
    </>
  );
};

export default Contact;
