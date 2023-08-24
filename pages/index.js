import { NextSeo } from "next-seo";
import Header from './../src/themeComponents/headers/header1/index';
import Footer from "../src/themeComponents/footers/footer1/index";
import IntroSection from './../src/themeComponents/heros/hero1/index';
import Features from './../src/themeComponents/features/features1/index';
import CurrentOffer from './../src/themeComponents/heros/hero2/index';
import BlogSecCard from './../src/themeComponents/blogSection/blogSection1/index';
import ReviewsSection from './../src/themeComponents/customer-reviews/customer-reviews1/index';
import Advertise from './../src/themeComponents/banners/banner3/index';
import FilterSection from './../src/themeComponents/filter-section/filter-section1/index';
import RecentlyAdd from './../src/themeComponents/recently-arrived/recently-arrived1/index';
import VedioBanner from './../src/themeComponents/banners/banner1/index';
import SpecialOffers from "../src/themeComponents/special-offer/special-offer1";
import BrandSection from './../src/themeComponents/brands/brands1/index';

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
      <IntroSection/>
      <Features/>
      <FilterSection/>
      <CurrentOffer/>
      <SpecialOffers/>
      <VedioBanner/>
      <RecentlyAdd/>
      <Advertise/>
      <BrandSection/>
      <ReviewsSection/>
      <BlogSecCard/>
      <Footer/>
      
    </>
  );
}
