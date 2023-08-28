import React from "react";
import notification from "./assets/notification.png";
import style from "./styles/Style.module.scss";
import Image from "next/future/image";
import { FormattedMessage } from "react-intl";

const SucessOrder = () => {
  return (
    <>
      <section className={style.SucessOrder}>
        <div className="container">
          <div className="order-details">
            <h2>شكرًا لك. تم استلام طلبك.</h2>
            <div className="order-details-row">
              <h5>منتج رقم :</h5>
              <p>3394</p>
            </div>

            <div className="order-details-row">
              <h5>
                التاريخ
                <span>:</span>
              </h5>
              <p> 2 أغسطس 2022</p>
            </div>

            <div className="order-details-row">
              <h5>
                بريد إلكتروني
                <span>:</span>
              </h5>
              <p> mohamed@gmail.com</p>
            </div>

            <div className="order-details-row">
              <h5>
                المجموع
                <span>:</span>{" "}
              </h5>
              <p>30.00 ريال</p>
            </div>

            <div className="order-details-row">
              <h5>
                طريقة الدفع
                <span>:</span>
              </h5>
              <p>تحويل مصرفي مباشر</p>
            </div>
          </div>

          <div className="order-table">
            <table className="table ">
              <thead>
                <tr>
                  <th>المنتج</th>
                  <th>العدد</th>
                  <th>السعر</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="td-title">تيل فرامل</td>
                  <td>2</td>
                  <td>10 ر.س</td>
                </tr>

                <tr>
                  <td className="td-title">تيل فرامل</td>
                  <td>2</td>
                  <td>10 ر.س</td>
                </tr>

                <tr>
                  <td className="td-title">تيل فرامل</td>
                  <td>2</td>
                  <td>10 ر.س</td>
                </tr>

                <tr className="td-subtotal">
                  <td colSpan="2" className="td-title">المجموع الفرعى</td>

                  <td>30 ر.س</td>
                </tr>

                <tr>
                  <td colSpan="2" className="td-title">التوصيل</td>

                  <td>5 ر.س</td>
                </tr>

                <tr className="td-subtotal">
                  <td colSpan="2" className="td-title">الاجمالى</td>

                  <td>35 ر.س</td>
                </tr>

                <tr>
                  <td colSpan="2" className="td-title">ملاحظات</td>

                  <td>لا توجد ملاحظات</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default SucessOrder;
