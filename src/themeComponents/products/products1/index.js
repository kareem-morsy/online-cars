import { filterPage } from "../../../../data";
import style from "./styles/Products.module.scss";
import ProductCard from "./ProductCard";
import Multi from "./assets/images/multi.svg";
import Single from "./assets/images/single.svg";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import Filters from './Filters';

const Products = () => {
  return (
    <>
      <section className={style.productsSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12">
              <Filters/>
            </div>

            <div className="col-md-9 col-12">
              <div className="classification-section">
                <div className="classification">
                  <div className="methods">
                    <div className="products-show">
                      <p>عرض</p>
                      <button>
                        <Multi />
                      </button>
                      <button>
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

              <div className="products">
                <div className="row">
                  {filterPage.map((product, index) => {
                    return (
                      <div className="col-md-4 col-12" key={index}>
                        <ProductCard product={product} />
                      </div>
                    );
                  })}
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
