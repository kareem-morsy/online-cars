import visa from "./assets/images/visa.png";
import master from "./assets/images/master.png";
import valu from "./assets/images/valu.png";
import meza from "./assets/images/meza.png";
import cash from "./assets/images/cash.png";
import Image from "next/future/image";
import { FormattedMessage, useIntl } from "react-intl";

const PayMethodCard = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className="pay-method">
        <h4>الدفع</h4>
        <div className="pay-method-container">
          <div className="visa-container">
            <div className="pay-visa">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  <FormattedMessage id="visaPay"/>
                </label>
              </div>

              <div className="visa-types">
                <div className="visa-type">
                  <Image src={valu} alt="payment" />
                </div>
                <div className="visa-type">
                  <Image src={meza} alt="payment" />
                </div>
                <div className="visa-type">
                  <Image src={master} alt="payment" />
                </div>
                <div className="visa-type">
                  <Image src={visa} alt="payment" />
                </div>
              </div>
            </div>

            <div className="visa-form">
              <form>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder={formatMessage({
                        id: "idNumber",
                      })}
                    />
                  </div>

                  <div className="col-md-6 col-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder={formatMessage({
                        id: "idOwner",
                      })}
                    />
                  </div>

                  <div className="col-md-6 col-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder={formatMessage({
                        id: "SecretPass",
                      })}
                    />
                  </div>

                  <div className="col-md-6 col-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder={formatMessage({
                        id: "expiredDate",
                      })}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="cash-method">
            <div className="cash-container">
              <div className="pay-cash">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <FormattedMessage id="recievePay"/>
                  </label>
                </div>

                <div className="cash-type">
                  <Image src={cash} alt="payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayMethodCard;
