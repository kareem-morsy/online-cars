import CouponImag from "./assets/images/coupon.svg";
import { FormattedMessage, useIntl } from "react-intl";

const SallaPay = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className="cart-pay">
        <div className="cart-pay-details">
          <h4>
            <FormattedMessage id="subTotal" />
          </h4>
          <p>31ر.س</p>
        </div>
        <div className="cart-pay-details">
          <h4>
            <FormattedMessage id="shipping" />
          </h4>
          <p>6 ر.س</p>
        </div>
        <div className="cart-pay-details">
          <h4>
            <FormattedMessage id="discount" />
          </h4>
          <p>0 ر.س</p>
        </div>

        <div className="cart-pay-details cart-pay-coupon">
          <h4>
            <FormattedMessage id="haveCoupun" />
          </h4>
          <div className="coupon-form">
            <span>
              <CouponImag />
            </span>
            <input
              type="text"
              placeholder={formatMessage({
                id: "discountCoupon",
              })}
            />
            <button>
              <FormattedMessage id="apply" />
            </button>
          </div>
        </div>

        <div className="cart-pay-details">
          <h4>
            <FormattedMessage id="total" />
          </h4>
          <p className="cart-total-pay">37 ر.س</p>
        </div>

        <button className="complete-pay">
          <FormattedMessage id="checkout" />
        </button>
      </div>
    </>
  );
};

export default SallaPay;
