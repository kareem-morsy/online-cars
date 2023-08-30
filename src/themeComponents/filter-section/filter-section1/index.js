import style from "./styles/Style.module.scss";
import Image from "next/future/image";
import { FormattedMessage } from "react-intl";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { filterSection } from "./../../../../data";
import MainCard from "./MainCard";
import MobSwiper from "./MobSwiper";

const FilterSection = () => {
  return (
    <>
      <section className={style.filterSection}>
        <div className="container">
          <Tabs defaultActiveKey="new" id="filterTabs" className="mb-3">
            <Tab eventKey="new" title="الأحدث">
              <div className="filter-tab">
                <div className="row">
                  {filterSection?.map((product, index) => {
                    return (
                      <div className="col-lg-3 col-md-6 col-12" key={index}>
                        <MainCard product={product} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <MobSwiper />
            </Tab>

            <Tab eventKey="mostSell" title="الأكثر مبيعا">
              <div className="filter-tab">
                <div className="row">
                  {filterSection?.map((product, index) => {
                    return (
                      <div className="col-md-3 col-12" key={index}>
                        <MainCard product={product} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <MobSwiper />
            </Tab>
            <Tab eventKey="highRating" title="أعلى التقييمات">
              <div className="filter-tab">
                <div className="row">
                  {filterSection?.map((product, index) => {
                    return (
                      <div className="col-md-3 col-12" key={index}>
                        <MainCard product={product} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <MobSwiper />
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default FilterSection;
