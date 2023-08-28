import Image from "next/future/image";
import product1 from "./assets/images/product1.png";
import product2 from "./assets/images/product2.png";
import Link from "next/link";
import Close from './assets/images/close.svg'
const CompareSection = () => {
  return (
    <>
      <div className="compare-section">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="compare-card">
              <div className="compare-info">
                <button><Close/></button>
              </div>

              <div className="compare-img">
                <Link href="/">
                  <a className="compare-img-link">
                    <Image src={product1} alt="product-img" />
                  </a>
                </Link>
              </div>

              <div className="compare-info">
                <Link href="/">
                  <a className="compare-card-title">
                    <h4>موتور سيارة</h4>
                    
                  </a>
                </Link>
              </div>

              <div className="compare-info">
                <span className="current-price">5000 ر.س</span>

                <span className="past-price">4500 ر.س</span>
              </div>

              <div className="compare-info">
                <p>النظارات الحديثة</p>
              </div>
              <div className="compare-info">
                <p>منتج جاهز</p>
              </div>
              <div className="compare-info">
                <p>فوجو</p>
              </div>
              <div className="compare-info">
                <p>18 دستة</p>
              </div>
            </div>
          </div>


          <div className="col-md-6 col-12">
            <div className="compare-card">
              <div className="compare-info">
                <button><Close/></button>
              </div>

              <div className="compare-img">
                <Link href="/">
                  <a className="compare-img-link">
                    <Image src={product2} alt="product-img" />
                  </a>
                </Link>
              </div>

              <div className="compare-info">
                <Link href="/">
                  <a className="compare-card-title">
                    <h4>موتور سيارة</h4>
                    
                  </a>
                </Link>
              </div>

              <div className="compare-info">
                <span className="current-price">5000 ر.س</span>

                <span className="past-price">4500 ر.س</span>
              </div>

              <div className="compare-info">
                <p>النظارات الحديثة</p>
              </div>
              <div className="compare-info">
                <p>منتج جاهز</p>
              </div>
              <div className="compare-info">
                <p>فوجو</p>
              </div>
              <div className="compare-info">
                <p>18 دستة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareSection;
