import Image from "next/future/image";
import Link from "next/link";
import React, { useState } from "react";
import BagIcon from "./assets/images/bag.svg";
import LikeIcon from "./assets/images/like.svg";
import CompareIcon from "./assets/images/compare.svg";
import ZoomIcon from "./assets/images/zoom.svg";
import Rate from "rc-rate";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SharedModal from "./SharedModal";

const ProductCard = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="filter-card">
        <div className="filter-card-img">
          <Image src={product?.image} alt="glass1" width={330} height={380} />
          <div className="filter-card-pane">
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

        <div className="filter-card-content">
          <Link href="/single-product">
            <a className="filter-card-title">{product?.title}</a>
          </Link>

          <div className="stars">
            <Rate value={3.5} allowHalf="true" disabled />
          </div>

          <div className="filter-card-price">
            <span className="current-price">175 ر.س</span>
            <span className="past-price">250 ر.س</span>
          </div>
        </div>
      </div>

      <SharedModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ProductCard;
