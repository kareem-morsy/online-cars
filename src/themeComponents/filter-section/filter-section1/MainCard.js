import Image from "next/future/image";
import Link from "next/link";
import Rate from "rc-rate";
import Bag from "./assets/images/bag.svg";
import Zoom from "./assets/images/zoom.svg";
import Fav from "./assets/images/fav.svg";

const MainCard = ({ product }) => {
  return (
    <>
      <div className="main-card">
        <div className="main-card-img">
          <Image src={product?.image} alt="product-image" />
          <Link href="/single-product">
            <a className="overlay-link"></a>
          </Link>

          <div className="buttons-overlay">
            <button>
              <Bag />
            </button>
            <button>
              <Fav />
            </button>
            <button>
              <Zoom />
            </button>
          </div>
        </div>

        <div className="main-card-content">
          <Link href="/single-product">
            <a className="main-card-title">{product?.title}</a>
          </Link>

          <p className="main-card-desc">{product.desc}</p>

          <div className="stars">
            <Rate value={3.5} allowHalf="true" disabled />
          </div>

          <div className="main-card-price">
            <span className="current-price">175 ر.س</span>
            <span className="past-price">250 ر.س</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
