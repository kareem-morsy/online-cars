import React from "react";
import styles from "./styles/Categories.module.scss";
import Image from "next/future/image";
import childglasses from "./assets/images/childglasses.png";
import cglasses from "./assets/images/cglasses.png";
import sunglasses from "./assets/images/sunglasses.png";
import sunglasses2 from "./assets/images/sunglasses2.png";
import seaglasses from "./assets/images/seaglasses.png";
import Link from "next/link";
import CategoriesMobSlider from "./CategoriesMobSlider";

const CategoriesSection = () => {
  return (
    <>
      <section className={styles.Categories1}>
        <div className="container">
          <div className="category-desktop">
            <div className="row">
              <div className="col-md-4">
                <div className="categories-card">
                  <div className="category-image">
                    <Image src={cglasses} alt="glasses" />
                  </div>
                  <div className="category-title">
                    <p>نظارات للعمل</p>
                  </div>
                  <Link href="/products">
                    <a className="categories-card-overlay"></a>
                  </Link>
                </div>

                <div className="categories-card">
                  <div className="category-image">
                    <Image src={childglasses} alt="glasses" />
                  </div>
                  <div className="category-title">
                    <p>نظارات اطفال</p>
                  </div>

                  <Link href="/products">
                    <a className="categories-card-overlay"></a>
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="large-categories-card">
                  <div className="category-image">
                    <Image src={sunglasses} alt="glasses" />
                  </div>
                  <div className="category-title">
                    <p>نظارات اطفال</p>
                  </div>

                  <Link href="/products">
                    <a className="categories-card-overlay"></a>
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="categories-card">
                  <div className="category-image">
                    <Image src={seaglasses} alt="glasses" />
                  </div>
                  <div className="category-title">
                    <p>نظارات للبحر</p>
                  </div>

                  <Link href="/products">
                    <a className="categories-card-overlay"></a>
                  </Link>
                </div>

                <div className="categories-card">
                  <div className="category-image">
                    <Image src={sunglasses2} alt="glasses" />
                  </div>
                  <div className="category-title">
                    <p>نظارات شمسية</p>
                  </div>

                  <Link href="/products">
                    <a className="categories-card-overlay"></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <CategoriesMobSlider />
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
