import BagIcon from "./assets/images/bag.svg";
import LikeIcon from "./assets/images/like.svg";
import CompareIcon from "./assets/images/compare.svg";
import ZoomIcon from "./assets/images/zoom.svg";
import Link from "next/link";
import Image from "next/future/image";
import { useState } from "react";
import SharedModal from "./SharedModal";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Rate from "rc-rate";
import { FormattedMessage } from "react-intl";

const RecentlyCard = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="recently-card">
        <div className="recently-card-img">
          <Image src={product?.image} alt="glass1" />
          <div className="recently-card-pane">
            <span className="new-pane"><FormattedMessage id="new" /></span>
            <span className="discount-pane">50%</span>
          </div>
          <Link href="/single-product">
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

        <div className="recently-card-content">
          <Link href="/single-product">
            <a className="recently-card-title">{product?.title}</a>
          </Link>

          <div className="stars">
            <Rate value={3.5} allowHalf="true" disabled />
          </div>

          <div className="recently-card-price">
            <span className="current-price">175 ر.س</span>
            <span className="past-price">250 ر.س</span>
          </div>
        </div>
      </div>

      <SharedModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default RecentlyCard;
