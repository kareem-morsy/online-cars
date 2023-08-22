import React from "react";
import styles from "./styles/RecentlyAdd.module.scss";
import RecentlyCard from "./RecentlyCard";
import { productsSection } from "../../../../data";
import ProductMobSlider from "./ProductMobSlider";
import { Col } from "react-bootstrap";

const RecentlyAdd = () => {
  return (
    <>
      <section className={styles.recentlyAdd}>
        <div className="container">
          <h2 className="section-title text-center">وصل حديثا</h2>

          <div className="products-desktop">
            <div className="row">
              {productsSection?.map((product, index) => {
                return (
                  <Col xl={3} lg={4} md={12} key={index}>
                    <RecentlyCard product={product} />
                  </Col>
                );
              })}
            </div>
          </div>

          <ProductMobSlider />
        </div>
      </section>
    </>
  );
};

export default RecentlyAdd;
