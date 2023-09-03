import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
const TotalPay = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className="total-pay">
        <div className="total-row">
          <p className="total-title"><FormattedMessage id="subTotal"/></p>
          <h5>850 ر.س</h5>
        </div>

        <div className="line"></div>

        <div className="total-row">
          <p className="total-title"><FormattedMessage id="delivery"/></p>
          <h6>5 ر.س</h6>
        </div>

        <div className="line"></div>

        <div className="total-row">
          <p className="total-title"><FormattedMessage id="total"/></p>
          <h5>855ر.س</h5>
        </div>
      </div>

      <div className="total-form">
        <form>
          <label><FormattedMessage id="discountCoupon"/></label>
          <div className="coupon">
            <input
              type="text"
              placeholder={formatMessage({
                id: "discountCoupon",
              })}
            />
            <button>
              <FormattedMessage id="mdiscount" />
            </button>
          </div>
        </form>
      </div>

      <div className="submit-order">
        <button><FormattedMessage id="compeletOrder"/></button>
      </div>
    </>
  );
};

export default TotalPay;
