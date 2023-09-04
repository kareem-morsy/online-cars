import { filterPage } from "../../../../data";
import style from "./styles/Products.module.scss";
import ProductCard from "./ProductCard";
import Multi from "./assets/images/multi.svg";
import Single from "./assets/images/single.svg";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import Filters from "./Filters";
import Filtr from "./assets/images/filters.svg";
import { useState } from "react";
import ProductCardColumn from "./ProductCardColumn";

const Products = () => {
  const [shapeView, setShapeView] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(!showFilter);

  const renderProducts = filterPage.map((product, index) => {
    return (
      <div className="col-md-6 col-xl-4 col-12" key={index}>
        <ProductCard product={product} />
      </div>
    );
  });

  const renderProductsColumn = filterPage.map((product, index) => {
    return <ProductCardColumn product={product} key={index} />;
  });
  return (
    <>
      <section className={style.productsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 col-12">
              <Filters showFilter={showFilter} toggleFilter={toggleFilter} />
            </div>

            <div className="col-lg-8 col-xl-9 col-12">
              <div className="classification-section">
                <div className="desktop-classification">
                  <div className="classification">
                    <div className="methods">
                      <div className="products-show">
                        <p>عرض</p>
                        <button onClick={() => setShapeView(true)}>
                          <Multi />
                        </button>
                        <button onClick={() => setShapeView(false)}>
                          <Single />
                        </button>
                      </div>

                      <div className="products-select">
                        <Form.Select aria-label="Default select example">
                          <option>المنتجات</option>
                          <option value="1">أحدث المنتجات</option>
                          <option value="2">الأكثر مبيعا</option>
                          <option value="3">الأكثر طلبا</option>
                        </Form.Select>
                      </div>
                    </div>
                  </div>

                  <div className="info">
                    <h6>النتائج :</h6>
                    <p>عرض</p>
                    <span>9</span>
                    <p>من</p>
                    <span>20</span>
                  </div>
                </div>

                <div className="mobile-classification">
                  <div className="mobile-classification-title">
                    <h4>المنتجات</h4>
                    <button className="filtr" onClick={toggleFilter}>
                      <p>تصفيات</p>
                      <span>
                        <Filtr />
                      </span>
                    </button>
                  </div>

                  <div className="mob-products-select">
                    <Form.Select aria-label="Default select example">
                      <option>المنتجات</option>
                      <option value="1">أحدث المنتجات</option>
                      <option value="2">الأكثر مبيعا</option>
                      <option value="3">الأكثر طلبا</option>
                    </Form.Select>
                  </div>
                </div>
              </div>

              <div className="products">
                <div className="row">
                  {shapeView ? (
                     renderProducts 
                  ) : (
                    <div className="col-12">{renderProductsColumn}</div>
                  )}
                </div>
              </div>

              <div className="pagination-section">
                <Pagination>
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Next />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
