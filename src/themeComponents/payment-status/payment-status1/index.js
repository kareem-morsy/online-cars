import React from "react";
import notification from "./assets/notification.png"
import style from "./styles/Style.module.scss";
import Image from "next/future/image";
import { FormattedMessage } from "react-intl";


const SucessOrder = () => {
  return (
    <>
      <section className={style.SucessOrder}>
        <div className="container">
          <div className="SucessOrder-details">
            <div className="order-notification">
              <div className="order-notification-img">
                <Image src={notification} alt="img" />
              </div>

              <div className="user-details">
                <p>
                  <FormattedMessage id="orderID" /> : 1542542
                </p>
                <h4>شكرا لك محمد ابراهيم</h4>
              </div>
            </div>

            <div className="confirmation">
              <p>تم تاكيد طلبك بنجاح </p>
              <h5>ستقوم بالدفع عند استلام طلبك</h5>
            </div>

            <div className="success-order-info">
              <h4>
                <FormattedMessage id="orderDetails" />
              </h4>
              <div className="order-info-details">
                <h6>
                  <FormattedMessage id="ContactInfo" />
                </h6>
                <p>mohamedmail@gmail.com</p>
              </div>

              <div className="order-info-details">
                <h6>
                  <FormattedMessage id="payInfo" />
                </h6>
                <p>دفع عند الاستلام ك 165 رس</p>
              </div>

              <div className="order-info-details">
                <h6>
                  <FormattedMessage id="deliveryAddres" />
                </h6>
                <p>محمد ابراهيم محمد</p>
                <p>العنوان بالتفصيل يكتب هنا</p>
                <p>المحلة الكبرى</p>
                <p>12548</p>
                <p>01002564566</p>
              </div>

              <div className="order-info-details">
                <h6>
                  <FormattedMessage id="deliveryInfo" />
                </h6>
                <p>توصيل عادى فى غضون 4 الى 5 ايام عمل </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SucessOrder;
