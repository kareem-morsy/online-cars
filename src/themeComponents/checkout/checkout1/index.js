import style from "./styles/Style.module.scss";
import PayMethod from "./PayMethod";
import AddressContainer from "./AddressContainer";
import Summary from "./Summary";
import TotalPay from "./TotalPay";

const CheckOut = () => {
  return (
    <>
      <div className={style.Checkout}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12">
              <AddressContainer />
              <PayMethod/>
            </div>

            <div className="col-md-5 col-12">
              <Summary/>
              <TotalPay/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
