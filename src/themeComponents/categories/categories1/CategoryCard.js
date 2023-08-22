import Image from "next/future/image";
import Link from "next/link";
import React from "react";

const CategoryCard = () => {
  return (
    <>
      <div className="categories-card">
        <div className="category-image">
          {/* <Image src={} alt="glasses" /> */}
        </div>
        <div className="category-title">
          <p>{category.title}</p>
        </div>
        <Link href="/products">
          <a className="categories-card-overlay"></a>
        </Link>
      </div>
    </>
  );
};

export default CategoryCard;
