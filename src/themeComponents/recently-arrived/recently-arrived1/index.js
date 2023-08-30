import React from "react";
import styles from "./styles/RecentlyAdd.module.scss";
import RecentlyCard from "./RecentlyCard";
import { filterSection } from "../../../../data";
import { Col } from "react-bootstrap";
import Link from "next/link";
import MobSwiper from "./MobSwiper";

const RecentlyAdd = () => {
  return (
    <>
      <section className={styles.recentlyAdd}>
        <div className="container">
          <div className="section-title">
            <h2>احدث المنتجات</h2>
            <Link href="/">
              <a className="title-button">مشاهدة الكل</a>
            </Link>
          </div>

          <div className="active-section">
            <div className="row">
              {filterSection?.map((product, index) => {
                return (
                  <Col xl={3} lg={4} md={12} key={index}>
                    <RecentlyCard product={product} />
                  </Col>
                );
              })}
            </div>
          </div>


          <MobSwiper/>
        </div>
      </section>
    </>
  );
};

export default RecentlyAdd;
