import { NextSeo } from "next-seo";
import { FormattedMessage, useIntl } from "react-intl";
import Header from "./../src/themeComponents/headers/header1/index";
import Footer from "./../src/themeComponents/footers/footer1/index";
import BreadCramb from "./../src/themeComponents/breadcrumbs/breadcrumbs1/index";
import ProfileSection from "../src/themeComponents/profile/profile1";

const Profile = () => {
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
      <ProfileSection/>
      <Footer />
    </>
  );
};

export default Profile;
