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
              <th scope="col">
                <FormattedMessage id="product" />
              </th>
              <th scope="col">
                <FormattedMessage id="price" />
              </th>
              <th scope="col">
                <FormattedMessage id="quantity" />
              </th>
              <th scope="col">
                <FormattedMessage id="total" />
              </th>
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
                    <h5>تيل فرامل</h5>
                    <p>يابانى</p>
                  </div>
                </div>
              </td>
              <td className="salla-price">55 ر.س</td>
              <td>
                <div className="Salla-count">
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    min="1"
                    max="100"
                  />
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
                    <h5>كوتش ميشلان</h5>
                    <p>مصرى</p>
                  </div>
                </div>
              </td>
              <td className="salla-price">55 ر.س</td>
              <td>
                <div className="Salla-count">
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    min="1"
                    max="100"
                    id="quantity"
                  />
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
                    <h5>مارش هيوندانى اصلى</h5>
                    <p>كورى</p>
                  </div>
                </div>
              </td>
              <td className="salla-price">55 ر.س</td>
              <td>
                <div className="Salla-count">
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    min="1"
                    max="100"
                  />
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
