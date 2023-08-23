import style from "./styles/Features.module.scss";
import Shipping from "./assets/images/shipping.svg";
import Pay from "./assets/images/pay.svg";
import Profits from "./assets/images/profits.svg";
import Fix from "./assets/images/fix.svg";

import Image from "next/future/image";
import { FormattedMessage, useIntl } from "react-intl";

const Features = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <section className={style.features}>
        <div className="container">
          <div className="features-cards">
            <div className="features-card">
              <div className="features-img">
                <Shipping />
              </div>

              <div className="features-text">
                <h6>الشحن مجانا</h6>
                <p>حد أقصى 39 دولارًا لكل طلب</p>
              </div>
            </div>

            <div className="features-card">
              <div className="features-img">
                <Pay />
              </div>

              <div className="features-text">
                <h6>مدفوعات آمنة</h6>
                <p>أقساط تصل إلى 12 شهرًا</p>
              </div>
            </div>

            <div className="features-card">
              <div className="features-img">
                <Profits />
              </div>

              <div className="features-text">
                <h6>عوائد 14 يومًا</h6>
                <p>تسوق مع الثقة</p>
              </div>
            </div>

            <div className="features-card">
              <div className="features-img">
                <Fix />
              </div>

              <div className="features-text">
                <h6>حوامل النسيج المجانية</h6>
                <p>توصيل حتى باب المنزل</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
