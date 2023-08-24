import React from "react";
import styles from "./styles/Style.module.scss";
import CategoryCard from "./CategoryCard";
import { categories } from './../../../../data';

const Categories = () => {
  console.log("categories",categories)
  return (
    <>
      <section className={styles.Categories}>
        <div className="container">
          <div className="row">
            {categories?.map((category, index) => {
              return (
                <div className="col-xl-3 col-md-6 col-12" key={index}>
                  <CategoryCard category={category} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
