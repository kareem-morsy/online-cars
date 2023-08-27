import style from "./styles/ProductDetails.module.scss";
import "swiper/css/thumbs";
import ProductImages from "./ProductImages";
import ProductCardInfo from "./ProductCardInfo";
import AccodionSection from "./AccodionSection";
import Link from "next/link";
import ProdutsRelated from './ProdutsRelated';
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
                <AccodionSection />
              </div>
            </div>
          </div>

          <div className="related">
            <ProdutsRelated/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
