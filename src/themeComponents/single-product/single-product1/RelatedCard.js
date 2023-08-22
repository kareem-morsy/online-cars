import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Image from "next/future/image";
import Link from "next/link";
import Rate from "rc-rate";
import BagIcon from "./assets/images/bag.svg";
import LikeIcon from "./assets/images/like.svg";
import CompareIcon from "./assets/images/compare.svg";
import ZoomIcon from "./assets/images/zoom.svg";

const RelatedCard = ({ product }) => {
  return (
    <>
      <div className="slide">
        <div className="related-products-card">
          <div className="related-products-card-img">
            <Image src={product?.image} alt="image" />
            <div className="related-products-card-pane">
              <span className="new-pane">جديد</span>
              <span className="discount-pane">50%</span>
            </div>

            <Link href="/">
              <a className="overlay-link"></a>
            </Link>

            <div className="overlay-button">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip>اضف الى السلة</Tooltip>}
              >
                <button>
                  <BagIcon fill="#2B0000" />
                </button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="left"
                overlay={<Tooltip>اضف الى المفضلة</Tooltip>}
              >
                <button>
                  <LikeIcon stroke="#2B0000" />
                </button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="left"
                overlay={<Tooltip>اضف للمقارنة</Tooltip>}
              >
                <button>
                  <CompareIcon fill="#2B0000" />
                </button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="left"
                overlay={<Tooltip>مشاهدة سريعة</Tooltip>}
              >
                <button onClick={() => setModalShow(true)}>
                  <ZoomIcon fill="#2B0000" />
                </button>
              </OverlayTrigger>
            </div>
          </div>

          <div className="related-products-card-content">
            <Link href="/">
              <a className="related-products-card-title">{product.title}</a>
            </Link>

            <div className="stars">
              <Rate value={3.5} allowHalf="true" disabled />
            </div>

            <div className="related-products-card-price">
              <span className="current-price">175 ر.س</span>
              <span className="past-price">250 ر.س</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedCard;
