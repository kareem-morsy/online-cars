import Form from "react-bootstrap/Form";
import Visa from "./assets/images/visa.svg";
import Truck from "./assets/images/truck.svg";
import Money from "./assets/images/money.svg";
import Credit from "./assets/images/creditcard.svg";

const PayMethod = () => {
  return (
    <>
      <div className="paymthod-section">
        <h2>الدفع</h2>

        <div classname="pay-form">
          <form>
            <div className="radio-row">
              <div className="form-group">
                <label>
                  <input type="radio" className="form-check" name="radio1" />
                  <span>
                    <Visa />
                  </span>
                  <span>الدفع بالفيزا</span>
                </label>
              </div>

              <div className="form-group">
                <label>
                  <input type="radio" className="form-check" name="radio1" />
                  <span>
                    <Truck />
                  </span>
                  <span>الدفع عند الاستلام</span>
                </label>
              </div>

              <div className="form-group">
                <label>
                  <input type="radio" className="form-check" name="radio1" />
                  <span>
                    <Money />
                  </span>
                  <span>الدفع بالفيزا</span>
                </label>
              </div>
            </div>

            <div className="form-content">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label>الاسم على البطاقة</label>
                    <input
                      type="text"
                      placeholder="محمد السيد ابراهيم"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label>رقم الكارت</label>
                    <input type="text" className="form-control" />
                    <span>
                      <Credit />
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label>تاريخ الانتهاء</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label>رقم ال CVV</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PayMethod;
