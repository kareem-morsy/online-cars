import Image from "next/future/image";
import product1 from "./assets/images/product1.png";
import product2 from "./assets/images/product2.png";
import product3 from "./assets/images/product3.png";
import Close from "./assets/images/Close.svg";
import { FormattedMessage } from "react-intl";

const SallaTable = () => {
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"><FormattedMessage id="product"/></th>
              <th scope="col"><FormattedMessage id="price"/></th>
              <th scope="col"><FormattedMessage id="quantity"/></th>
              <th scope="col"><FormattedMessage id="total"/></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="cart-img-name">
                  <div className="cart-product-img">
                    <Image src={product1} alt="product-img" />
                  </div>
                  <div className="cart-product-name">
                    <h5>نظارة حريمى حديثة</h5>
                    <p>ازرق</p>
                  </div>
                </div>
              </td>
              <td>55 ر.س</td>
              <td>
                <div className="Salla-count">
                  <button>+</button>
                  <span>1</span>
                  <button>-</button>
                </div>
              </td>
              <td>10 ر.س</td>
              <td>
                <button className="cart-product-remove">
                  <Close />
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <div className="cart-img-name">
                  <div className="cart-product-img">
                    <Image src={product2} alt="product-img" />
                  </div>
                  <div className="cart-product-name">
                    <h5>نظارة حريمى حديثة</h5>
                    <p>ازرق</p>
                  </div>
                </div>
              </td>
              <td>55 ر.س</td>
              <td>
                <div className="Salla-count">
                  <button>+</button>
                  <span>2</span>
                  <button>-</button>
                </div>
              </td>
              <td>10 ر.س</td>
              <td>
                <button className="cart-product-remove">
                  <Close />
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <div className="cart-img-name">
                  <div className="cart-product-img">
                    <Image src={product3} alt="product-img" />
                  </div>
                  <div className="cart-product-name">
                    <h5>نظارة حريمى حديثة</h5>
                    <p>ازرق</p>
                  </div>
                </div>
              </td>
              <td>55 ر.س</td>
              <td>
                <div className="Salla-count">
                  <button>+</button>
                  <span>1</span>
                  <button>-</button>
                </div>
              </td>
              <td>10 ر.س</td>
              <td>
                <button className="cart-product-remove">
                  <Close />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SallaTable;
