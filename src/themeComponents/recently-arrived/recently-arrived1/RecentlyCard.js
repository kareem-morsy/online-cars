import Image from 'next/future/image'
import Link from 'next/link'
import Rate from 'rc-rate'
import React from 'react'

const RecentlyCard = ({ product }) => {

  return (
    <>
      <div className='main-card'>
        <div className='main-card-img'>
          <Image src={product?.image} alt="product-image" />
          <Link href="/single-product">
            <a className="overlay-link"></a>
          </Link>
        </div>

        <div className='main-card-content'>
          <Link href="/single-product">
            <a className="main-card-title">{product?.title}</a>
          </Link>

          <p className='main-card-desc'>{product.desc}</p>

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

export default RecentlyCard;
