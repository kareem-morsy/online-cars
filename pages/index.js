import { NextSeo } from "next-seo";
import Header from './../src/themeComponents/headers/header1/index';
import Footer from "../src/themeComponents/footers/footer1/index";

export default function Home() {
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
      
      <Footer/>
      
    </>
  );
}
