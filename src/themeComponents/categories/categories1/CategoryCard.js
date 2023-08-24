import Image from "next/future/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category }) => {
  const x = category;
  console.log(x);
  return (
    <>
      <div className="categories-card">
        <div className="category-image">
          <Image src={category?.image} alt="glasses" />
        </div>
        <div className="category-details">
          <p className="category-name">#الاضاءة</p>
          <Link href="/products">
            <a className="category-title">{category.title}</a>
          </Link>
        </div>
        <Link href="/products">
          <a className="categories-shopping">
            تسوق الآن
            <span>+</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default CategoryCard;
