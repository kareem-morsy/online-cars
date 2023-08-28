import Image from "next/future/image";
import product1 from "./assets/images/product1.png";
import product2 from "./assets/images/product2.png";
import product3 from "./assets/images/product3.png";
import Up from "./assets/images/up.svg";
import Down from "./assets/images/down.svg";

const Summary = () => {
  return (
    <>
      <div className="products-summary">
        <div className="product-row">
          <div className="product-details">
            <div className="product-image">
              <Image src={product1} alt="product-image" />
            </div>
            <div className="userInfo">
              <p className="name">تيل فرامل</p>
              <p className="price">200 رس</p>
            </div>
          </div>

          <div className="product-counter">
            <span>2</span>
            <div className="counter-buutons">
              <button>
                <Up />
              </button>
              <button>
                <Down />
              </button>
            </div>
          </div>

          <div className="total">
            <p>400 ر.س</p>
          </div>
        </div>

        <div className="line"></div>

        <div className="product-row">
          <div className="product-details">
            <div className="product-image">
              <Image src={product2} alt="product-image" />
            </div>
            <div className="userInfo">
              <p className="name">تيل فرامل</p>
              <p className="price">200 رس</p>
            </div>
          </div>

          <div className="product-counter">
            <span>2</span>
            <div className="counter-buutons">
              <button>
                <Up />
              </button>
              <button>
                <Down />
              </button>
            </div>
          </div>

          <div className="total">
            <p>400 ر.س</p>
          </div>
        </div>

        <div className="line"></div>


        <div className="product-row">
          <div className="product-details">
            <div className="product-image">
              <Image src={product3} alt="product-image" />
            </div>
            <div className="userInfo">
              <p className="name">تيل فرامل</p>
              <p className="price">200 رس</p>
            </div>
          </div>

          <div className="product-counter">
            <span>2</span>
            <div className="counter-buutons">
              <button>
                <Up />
              </button>
              <button>
                <Down />
              </button>
            </div>
          </div>

          <div className="total">
            <p>400 ر.س</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
