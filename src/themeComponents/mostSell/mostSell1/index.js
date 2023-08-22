import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "./styles/styles.module.scss";
import { productsSection } from "../../../../data";
import MostSellCard from "./MostSellCard";
import ProductMobSlider from "./ProductMobSlider";

const MostSell = () => {
  // const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <section className={styles.mostSell}>
        <div className="container">
          <h2 className="section-title text-center">الاكثر مبيعا</h2>

          <Tabs defaultActiveKey="All" id="uncontrolled-tab-example">
            <Tab eventKey="All" title="جميع الفئات">
              <div className="products-desktop">
                <div className="row">
                  {productsSection?.map((product, index) => {
                    return (
                      <div
                        className="col-xl-3 col-lg-4 col-md-6 col-12"
                        key={index}
                      >
                        <MostSellCard product={product} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <ProductMobSlider />
            </Tab>

            <Tab eventKey="HomeMachines" title="أجهزة منزلية">
              <div className="products-desktop">
                <div className="row">
                  {productsSection?.map((product, index) => {
                    return (
                      <div
                        className="col-xl-3 col-lg-4 col-md-6 col-12"
                        key={index}
                      >
                        <MostSellCard product={product} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <ProductMobSlider />
            </Tab>

            <Tab eventKey="electrical" title="أجهزة كهربائية">
              <div className="products-desktop">
                <div className="row">
                  {productsSection?.map((product, index) => {
                    return (
                      <div
                        className="col-xl-3 col-lg-4 col-md-6 col-12"
                        key={index}
                      >
                        <MostSellCard product={product} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <ProductMobSlider />
            </Tab>

            <Tab eventKey="decore" title="ديكور">
              <div className="products-desktop">
                <div className="row">
                  {productsSection?.map((product, index) => {
                    return (
                      <div
                        className="col-xl-3 col-lg-4 col-md-6 col-12"
                        key={index}
                      >
                        <MostSellCard product={product} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <ProductMobSlider />
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default MostSell;
