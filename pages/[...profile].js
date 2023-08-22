import { NextSeo } from "next-seo";
import Header2 from "../src/themeComponents/headers/header2";
import Features from "../src/themeComponents/features/features1";
import ProfileSection from "../src/themeComponents/profile/profile1";
import FooterSection from "../src/themeComponents/footers/footer1";
import BreadCramb from "../src/themeComponents/breadcrumbs/breadcrumbs1";
import NewsLetter from "../src/themeComponents/news-letter/news-letter1";
import { FormattedMessage } from "react-intl";


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

      {/* <Header2 />
      <BreadCramb pageName={<FormattedMessage id="controlPanel" />}/>
      <ProfileSection/>
      <NewsLetter/>
      <Features />
      <FooterSection/> */}
    </>
  );
};

export default Profile;
