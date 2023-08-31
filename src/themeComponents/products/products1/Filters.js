import Link from "next/link";
import { FormattedMessage } from "react-intl";
import Close from "./assets/images/close.svg";
import Form from "react-bootstrap/Form";
import Image from "next/future/image";
import sell1 from "./assets/images/sell1.png";
import sell2 from "./assets/images/sell2.png";
import ads from "./assets/images/ads.png"
import Rate from "rc-rate";

const Filters = ({showFilter , toggleFilter}) => {
  return (
    <>
      <div className={`products-filter ${showFilter ? "show-filter" : "hide-filter"}`}>
        <div className="filter-head">
          <h4>الفلاتر</h4>
          <button onClick={toggleFilter}><Close/></button>
        </div>
        <div className="filter-unit">
          <div className="filter-unit-head">
            <h4>فئات المنتجات</h4>
          </div>
          <div className="filter-unit-content">
            <Link href="/">
              <a className="filter-link">
                <p>الإضاءة</p>
                <span>65</span>
              </a>
            </Link>

            <Link href="/">
              <a className="filter-link">
                <p>جسم السيارة</p>
                <span>21</span>
              </a>
            </Link>

            <Link href="/">
              <a className="filter-link">
                <p>صالون السيارة</p>
                <span>54</span>
              </a>
            </Link>

            <Link href="/">
              <a className="filter-link">
                <p>اجزاء التعليق</p>
                <span>85</span>
              </a>
            </Link>

            <Link href="/">
              <a className="filter-link">
                <p>الاطارات</p>
                <span>98</span>
              </a>
            </Link>

            <Link href="/">
              <a className="filter-link">
                <p>صالون السيارة</p>
                <span>89</span>
              </a>
            </Link>
          </div>
        </div>

        <div className="filter-unit">
          <div className="filter-unit-head">
            <h4>السعر</h4>
          </div>
          <div className="filter-unit-content">
            <div className="filter-range">
              <Form.Range />

              <div className="price">
                <p>السعر :</p>
                <span>0$</span>-<span>250$</span>
              </div>
            </div>
          </div>
        </div>

        <div className="filter-unit">
          <div className="filter-unit-head">
            <h4>الأعلى مبيعا</h4>
          </div>
          <div className="filter-unit-content">
            <div className="filter-sell-card">
              <div className="sell-card-img">
                <Image src={sell1} alt="product-img" />
              </div>

              <div className="sell-card-content">
                <div className="rating-info">
                  <div className="stars">
                    <Rate value={3.5} allowHalf="true" disabled />
                  </div>

                  <div className="rates">
                    <span>15</span>
                    <span>(تقييمات)</span>
                  </div>
                </div>
                <h4>لمباات ليد 12 وات</h4>

                <div className="sell-price">
                  <span>400</span>
                  <span>ر.س</span>
                </div>
              </div>
            </div>

            <div className="filter-sell-card">
              <div className="sell-card-img">
                <Image src={sell2} alt="product-img" />
              </div>

              <div className="sell-card-content">
                <div className="rating-info">
                  <div className="stars">
                    <Rate value={3.5} allowHalf="true" disabled />
                  </div>

                  <div className="rates">
                    <span>15</span>
                    <span>(تقييمات)</span>
                  </div>
                </div>
                <h4>لمباات ليد 12 وات</h4>

                <div className="sell-price">
                  <span>400</span>
                  <span>ر.س</span>
                </div>
              </div>
            </div>

            <div className="filter-sell-card">
              <div className="sell-card-img">
                <Image src={sell1} alt="product-img" />
              </div>

              <div className="sell-card-content">
                <div className="rating-info">
                  <div className="stars">
                    <Rate value={3.5} allowHalf="true" disabled />
                  </div>

                  <div className="rates">
                    <span>15</span>
                    <span>(تقييمات)</span>
                  </div>
                </div>
                <h4>لمباات ليد 12 وات</h4>

                <div className="sell-price">
                  <span>400</span>
                  <span>ر.س</span>
                </div>
              </div>
            </div>

            <div className="filter-sell-card">
              <div className="sell-card-img">
                <Image src={sell2} alt="product-img" />
              </div>

              <div className="sell-card-content">
                <div className="rating-info">
                  <div className="stars">
                    <Rate value={3.5} allowHalf="true" disabled />
                  </div>

                  <div className="rates">
                    <span>15</span>
                    <span>(تقييمات)</span>
                  </div>
                </div>
                <h4>لمباات ليد 12 وات</h4>

                <div className="sell-price">
                  <span>400</span>
                  <span>ر.س</span>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="filter-unit">
          <div className="filter-unit-head">
            <h4>الالوان</h4>
          </div>
          <div className="filter-unit-content">
            <div className="color-bttns">
              <button style={{backgroundColor : "#B26F6F"}}></button>
              <button style={{backgroundColor : "#21686C"}}></button>
              <button style={{backgroundColor : "#841A96"}}></button>
              <button style={{backgroundColor : "#5A4951"}}></button>
              <button style={{backgroundColor : "#A49727"}}></button>
              <button style={{backgroundColor : "#248AC3"}}></button>
              <button style={{backgroundColor : "#B4B3F6"}}></button>
              <button style={{backgroundColor : "#4F0505"}}></button>
              <button style={{backgroundColor : "rgba(111, 128, 126, 0.63)"}}></button>
              <button style={{backgroundColor : "#B11515"}}></button>
              <button style={{backgroundColor : "#53571E"}}></button>
              <button style={{backgroundColor : "#2C427A"}}></button>
            </div>
          </div>
        </div>

        <div className="ads">
          <Image src={ads} alt="Ads-image" />
        </div>



        
      </div>
    </>
  );
};

export default Filters;
