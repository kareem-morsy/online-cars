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
          <tbody>
            <tr>
              <td>
                <div className="cart-product-img">
                  <Image src={product1} alt="product-img" />
                </div>
              </td>
              <td className="salla-title">كوتش ميشلان</td>
              <td className="salla-price">2500 ر.س</td>
              <td className="salla-status">متوفر فى المخزن</td>

              <td>
                <button className="cart-product-remove">
                  <Close />
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <div className="cart-product-img">
                  <Image src={product2} alt="product-img" />
                </div>
              </td>
              <td className="salla-title">كوتش ميشلان</td>
              <td className="salla-price">2500 ر.س</td>
              <td className="salla-status">متوفر فى المخزن</td>

              <td>
                <button className="cart-product-remove">
                  <Close />
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <div className="cart-product-img">
                  <Image src={product3} alt="product-img" />
                </div>
              </td>
              <td className="salla-title">كوتش ميشلان</td>
              <td className="salla-price">2500 ر.س</td>
              <td className="salla-status">متوفر فى المخزن</td>

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
