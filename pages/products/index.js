import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import FooterSection from "../../src/themeComponents/footers/footer1";
import Features from "../../src/themeComponents/features/features1";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";
import Products from "../../src/themeComponents/products/products1";
import NewsLetter from "../../src/themeComponents/news-letter/news-letter1";
import { FormattedMessage } from "react-intl";



const ProductsPage = () => {
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

        <Header2/>
        <BreadCramb pageName={<FormattedMessage id="products" />}/>
        <Products/>
        <NewsLetter/>
        <Features/>
        <FooterSection/>
    </>
  )
}

export default ProductsPage