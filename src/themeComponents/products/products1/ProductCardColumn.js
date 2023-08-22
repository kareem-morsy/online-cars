import React, { useState } from "react";
import Image from "next/future/image";
import Link from "next/link";
import LikeIcon from "./assets/images/like.svg";
import CompareIcon from "./assets/images/compare.svg";
import ZoomIcon from "./assets/images/zoom.svg";
import Rate from "rc-rate";
import SharedModal from "./SharedModal";

const ProductCardColumn = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="col-12">
        <div className="filter-card-column">
          <div className="filter-card-column-img">
            <Image src={product?.image} alt="glass1" />
            <div className="filter-card-pane">
              <span className="new-pane">جديد</span>
              <span className="discount-pane">50%</span>
            </div>
            <Link href="/single-product">
              <a className="overlay-link"></a>
            </Link>
          </div>
          <div className="filter-overlay">
            <button>
              <LikeIcon />
            </button>

            <button>
              <CompareIcon />
            </button>

            <button onClick={() => setModalShow(true)}>
              <ZoomIcon />
            </button>
          </div>

          <div className="filter-card-column-content">
            <Link href="/single-product">
              <a className="filter-column-title">{product.title}</a>
            </Link>

            <p className="filter-column-desc">{product.description}</p>

            <div className="stars">
              <Rate value={3.5} allowHalf="true" disabled />
            </div>

            <div className="filter-card-price">
              <span className="current-price">175 ر.س</span>
              <span className="past-price">250 ر.س</span>
            </div>

            <button className="add-to-cart">اضف الى السلة</button>
          </div>
        </div>
      </div>

      <SharedModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ProductCardColumn;
