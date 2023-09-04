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
      <div className="offer-horizontal-card">
        <div className="horizontal-img">
          <Image src={product.image} alt="Image" />

          <div className="card-pane">
            <span>خصم 10% </span>
          </div>
          <Link href="/">
            <a className="card-overlay"></a>
          </Link>
        </div>

        <div className="horizontal-content">
          <Link href="/">
            <a className="horizontal-title">اسم المنتج يكتب هنا</a>
          </Link>
          <p className="horizontal-desc">
            هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو{" "}
          </p>
          <div className="stars">
            <Rate value={3.5} allowHalf="true" disabled />
          </div>

          <div className="horizontal-price">
            <span className="current-price">175 ر.س</span>
            <span className="past-price">250 ر.س</span>
          </div>
        </div>
      </div>

      {/* <SharedModal show={modalShow} onHide={() => setModalShow(false)} /> */}
    </>
  );
};

export default ProductCardColumn;
