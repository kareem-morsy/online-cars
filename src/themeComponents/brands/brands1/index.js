import Link from "next/link";
import styles from "./styles/Brands.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import tab1 from "./assets/images/tab1.png";
import tab2 from "./assets/images/tab2.png";
import tab3 from "./assets/images/tab3.png";
import tab4 from "./assets/images/tab4.png";
import tab5 from "./assets/images/tab5.png";
import tab6 from "./assets/images/tab6.png";
import tab7 from "./assets/images/tab7.png";
import Arrow from "./assets/images/arrow.svg";
import Image from "next/future/image";
import BrandsCard from "./BrandsCard";
import { brandSection } from "../../../../data";

const BrandSection = () => {
  const image1 = <Image src={tab1} alt="Image" />;
  const image2 = <Image src={tab2} alt="Image" />;
  const image3 = <Image src={tab3} alt="Image" />;
  const image4 = <Image src={tab4} alt="Image" />;
  const image5 = <Image src={tab5} alt="Image" />;
  const image6 = <Image src={tab6} alt="Image" />;
  const image7 = <Image src={tab7} alt="Image" />;
  return (
    <>
      <section className={styles.brandSection}>
        <div className="container">
          <div className="section-title">
            <h2>تسوق حسب البراند</h2>
            <Link href="/">
              <a className="title-button">مشاهدة الكل</a>
            </Link>
          </div>

          <div className="brands-tabs">
            <Tabs defaultActiveKey="brand1" id="filterTabs" className="mb-3">
              <Tab eventKey="brand1" title={image1}>
                <div className="row">
                  <div className="col-md-4 col-12">
                    <div className="brand-cards">
                      {brandSection?.map((product, index) => {
                        return <BrandsCard product={product} key={index} />;
                      })}
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="brand-main-card">
                      <div className="brand-main-img">
                        <Image src={tab1} alt="Image" />
                      </div>

                      <p className="brand-main-desc">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                        لصفحة ما سيلهي القارئ عن التركيز على الشكل
                      </p>

                      <Link href="/">
                        <a className="brand-main-link">
                          عرض منتجات البراند
                          <span>
                            <Arrow />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="brand-cards">
                      {brandSection?.map((product, index) => {
                        return <BrandsCard product={product} key={index} />;
                      })}
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="brand2" title={image2}>
                <div className="row">
                  <div className="col-md-4 col-12">
                    <div className="brand-cards">
                      {brandSection?.map((product, index) => {
                        return <BrandsCard product={product} key={index} />;
                      })}
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="brand-main-card">
                      <div className="brand-main-img">
                        <Image src={tab1} alt="Image" />
                      </div>

                      <p className="brand-main-desc">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                        لصفحة ما سيلهي القارئ عن التركيز على الشكل
                      </p>

                      <Link href="/">
                        <a className="brand-main-link">
                          عرض منتجات البراند
                          <span>
                            <Arrow />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="brand-cards">
                      {brandSection?.map((product, index) => {
                        return <BrandsCard product={product} key={index} />;
                      })}
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="brand3" title={image3}>
                <div className="row">
                  <div className="col-md-4 col-12">
                    <div className="brand-cards">
                      {brandSection?.map((product, index) => {
                        return <BrandsCard product={product} key={index} />;
                      })}
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="brand-main-card">
                      <div className="brand-main-img">
                        <Image src={tab1} alt="Image" />
                      </div>

                      <p className="brand-main-desc">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                        لصفحة ما سيلهي القارئ عن التركيز على الشكل
                      </p>

                      <Link href="/">
                        <a className="brand-main-link">
                          عرض منتجات البراند
                          <span>
                            <Arrow />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="brand-cards">
                      {brandSection?.map((product, index) => {
                        return <BrandsCard product={product} key={index} />;
                      })}
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="brand4" title={image4}>
                <div className="row">
                  <div className="col-md-4 col-12">
                    <div className="brand-cards">
                      {brandSection?.map((product, index) => {
                        return <BrandsCard product={product} key={index} />;
                      })}
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="brand-main-card">
                      <div className="brand-main-img">
                        <Image src={tab1} alt="Image" />
                      </div>

                      <p className="brand-main-desc">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                        لصفحة ما سيلهي القارئ عن التركيز على الشكل
                      </p>

                      <Link href="/">
                        <a className="brand-main-link">
                          عرض منتجات البراند
                          <span>
                            <Arrow />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="brand-cards">
                      {brandSection?.map((product, index) => {
                        return <BrandsCard product={product} key={index} />;
                      })}
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="brand5" title={image5}>
                <div className="row"></div>
              </Tab>

              <Tab eventKey="brand6" title={image6}>
                <div className="row"></div>
              </Tab>

              <Tab eventKey="brand7" title={image7}>
                <div className="row"></div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSection;
