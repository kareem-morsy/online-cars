import Image from "next/future/image";
import Link from "next/link";
import Rate from "rc-rate";
import Like from "./assets/images/like.svg";
import Facebook from "./assets/images/facebook.svg";
import Twitter from "./assets/images/twitter.svg";
import Instagram from "./assets/images/instagram.svg";
import Snap from "./assets/images/snap.svg";
import { FormattedMessage } from "react-intl";

const ProductCardInfo = () => {
  return (
    <>
      <div className="product-info">
        <div className="stars">
          <Rate value={3.5} allowHalf="true" disabled />
          <p>
            (<span>5</span>
            تقييمات )
          </p>
        </div>

        <h4>مصباح ليد امامى 12 فزلت</h4>

        <div className="product-price">
          <div className="current-price">
            <span>250</span>
            <span>ر.س</span>
          </div>

          <div className="past-price">
            <span>250</span>
            <span>ر.س</span>
          </div>
        </div>

        <p className="product-info-desc">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص ...
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص ...
        </p>

        <div className="product-options">
          <div className="Salla-count">
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </div>

          <button className="add-cart">
            <FormattedMessage id="addToCart" />
          </button>

          <button className="favourite">
            <span>
              <Like />
            </span>
            <FormattedMessage id="favourite" />
          </button>
        </div>


        <div className="buy-button">
            <button>شراء</button>
        </div>

        <div className="SKU">
          <h6>SKU : </h6>
          <p>su8</p>
        </div>

        <div className="calssification">
          <h6>
            <FormattedMessage id="category" /> :
          </h6>
          <p>اكسسورات</p>
        </div>

        <div className="info-social">
          <h6>
            <FormattedMessage id="share" /> :
          </h6>
          <div className="social">
            <Link href="/">
              <a>
                <Facebook />
              </a>
            </Link>

            <Link href="/">
              <a>
                <Twitter />
              </a>
            </Link>

            <Link href="/">
              <a>
                <Instagram />
              </a>
            </Link>

            <Link href="/">
              <a>
                <Snap />
              </a>
            </Link>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default ProductCardInfo;
