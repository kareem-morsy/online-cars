import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import FooterSection from "../../src/themeComponents/footers/footer1";
import Features from "../../src/themeComponents/features/features1";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";
import ProductDetails from "../../src/themeComponents/single-product/single-product1";
import NewsLetter from './../../src/themeComponents/news-letter/news-letter1/index';
import { FormattedMessage } from "react-intl";



const SingleProduct = () => {
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

        {/* <Header2/>
        <BreadCramb pageName={<FormattedMessage id="product" />}/>
        <ProductDetails/>
        <NewsLetter/>
        <Features/>
        <FooterSection/> */}
    </>
  )
}

export default SingleProduct