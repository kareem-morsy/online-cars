import style from "./styles/ProductDetails.module.scss";
import "swiper/css/thumbs";
import ProductImages from "./ProductImages";
import ProductTabs from "./ProductTabs";
import ProdutsRelated from "./ProdutsRelated";
import ProductCardInfo from "./ProductCardInfo";
const ProductDetails = () => {
  return (
    <>
      <section className={style.productDetails}>
        <div className="container">
          <div className="product-info-slider">
            <div className="row">
              <div className="col-lg-6">
                <ProductImages />
              </div>

              <div className="col-lg-6">
                <ProductCardInfo />
              </div>
            </div>
          </div>

          <ProductTabs />
          <ProdutsRelated />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
