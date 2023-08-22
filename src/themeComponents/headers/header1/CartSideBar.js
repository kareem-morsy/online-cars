import React, { useState } from "react";
// import stylee from "./styles/Offcanvas.module.scss";
import product1 from "./assets/images/product1.png";
import product2 from "./assets/images/product2.png";
import product3 from "./assets/images/product3.png";
import Close from "./assets/images/close.svg";
import Link from "next/link";
import Image from "next/future/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./styles/Header2.module.scss";

const CartSideBar = ({toggleSideCart , showSideCart}) => {
  

  return (
    <>
      <div className={`cartSidebar ${showSideCart ? "cartShow" : ''}`}>
        <div className="grand-sidebar">
          <div className="cartSidebar-header">
            <h3>سلة التسوق</h3>
            <button onClick={toggleSideCart}>
              <Close />
            </button>
          </div>

          <div className="sidebar-cart-products">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <div className="sidebar-td-img">
                      <Image src={product1} alt="product-img" />
                    </div>
                  </td>

                  <td>
                    <div className="sidebar-td-details">
                      <h5>نظارة حريمى حديثة</h5>
                      <p>
                        المقاس :<span>25</span>/ اللون :<span>ازرق</span>
                      </p>
                      <h6>50 ر.س</h6>
                    </div>
                  </td>

                  <td>
                    <div className="Salla-count">
                      <button onClick={(e) => setCount((e) => count + 1)}>
                        +
                      </button>
                      <span>1</span>
                      <button onClick={(e) => setCount((e) => count + 1)}>
                        -
                      </button>
                    </div>
                  </td>

                  <td>
                    <button className="cart-product-remove">
                      <Close />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="sidebar-td-img">
                      <Image src={product2} alt="product-img" />
                    </div>
                  </td>

                  <td>
                    <div className="sidebar-td-details">
                      <h5>نظارة حريمى حديثة</h5>
                      <p>
                        المقاس :<span>25</span>/ اللون :<span>ازرق</span>
                      </p>
                      <h6>50 ر.س</h6>
                    </div>
                  </td>

                  <td>
                    <div className="Salla-count">
                      <button onClick={(e) => setCount((e) => count + 1)}>
                        +
                      </button>
                      <span>1</span>
                      <button onClick={(e) => setCount((e) => count + 1)}>
                        -
                      </button>
                    </div>
                  </td>

                  <td>
                    <button className="cart-product-remove">
                      <Close />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="sidebar-td-img">
                      <Image src={product3} alt="product-img" />
                    </div>
                  </td>

                  <td>
                    <div className="sidebar-td-details">
                      <h5>نظارة حريمى حديثة</h5>
                      <p>
                        المقاس :<span>25</span>/ اللون :<span>ازرق</span>
                      </p>
                      <h6>50 ر.س</h6>
                    </div>
                  </td>

                  <td>
                    <div className="Salla-count">
                      <button onClick={(e) => setCount((e) => count + 1)}>
                        +
                      </button>
                      <span>1</span>
                      <button onClick={(e) => setCount((e) => count + 1)}>
                        -
                      </button>
                    </div>
                  </td>

                  <td>
                    <button className="cart-product-remove">
                      <Close />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="sub-total">
              <h4>المجموع الفرعى</h4>
              <h6>25 ر.س</h6>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                أوافق على الشروط و الأحكام
              </label>
            </div>

            <div className="sidebar-products-bttn">
              <button>إتمام الطلب</button>
              <Link href="/cart">
                <a>مشاهدة السلة </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={`siderbar-overlay ${showSideCart ? "showOverlay" : ''}`}></div>
      </div>
    </>
  );
};

export default CartSideBar;
