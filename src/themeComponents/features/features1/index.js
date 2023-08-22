import style from "./styles/Features.module.scss";
import featuresImg from "./assets/images/features.png";
import Receieve from "./assets/images/receieve.svg";
import Mobile from "./assets/images/mobile.svg";
import Wallet from "./assets/images/wallet.svg";
import Offers from "./assets/images/offers.svg";
import Image from "next/future/image";
import { FormattedMessage, useIntl } from "react-intl";

const Features = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <section className={style.features}>
        <div className="feature-img">
          <Image src={featuresImg} alt="features-section" />
        </div>

        <div className="features-overlay">
          <div className="container">
            <div className="features-cards">
              <div className="features-card">
                <div className="features-img">
                  <Receieve />
                </div>

                <div className="features-text">
                  <h6>توصيل مجانى</h6>
                  <p>للطلبات اعلى من 200 ريال</p>
                </div>
              </div>

              <div className="features-card">
                <div className="features-img">
                  <Mobile />
                </div>

                <div className="features-text">
                  <h6>دعم فنى</h6>
                  <p>دعم على مدار الساعة</p>
                </div>
              </div>

              <div className="features-card">
                <div className="features-img">
                  <Wallet />
                </div>

                <div className="features-text">
                  <h6>استرجاع الاموال</h6>
                  <p>الاسترداد الامن لاموالك او الاستبدال</p>
                </div>
              </div>

              <div className="features-card">
                <div className="features-img">
                  <Offers />
                </div>

                <div className="features-text">
                  <h6>عروض حصرية</h6>
                  <p>خصومات كبيرة على منتجاتنا</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
