import Image from "next/future/image";
import Link from "next/link";
import Rate from "rc-rate";
import React from "react";

const BrandsCard = ({ product }) => {
  return (
    <>
      <div className="brands-horizontal-card">
        <div className="horizontal-img">
          <Image src={product?.image} alt="Image" />

          <div className="card-pane">
            <span>خصم 10% </span>
          </div>

          <Link href="/">
            <a className="card-overlay"></a>
          </Link>
        </div>

        <div className="horizontal-content">
          <Link href="/">
            <a className="horizontal-title">{product.title}</a>
          </Link>

          <div className="stars">
            <Rate value={3.5} allowHalf="true" disabled />
          </div>

          <div className="horizontal-price">
            <span className="current-price">175 ر.س</span>
            <span className="past-price">250 ر.س</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsCard;
