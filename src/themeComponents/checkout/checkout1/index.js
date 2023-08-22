import style from "./styles/CheckOut.module.scss";
import PayMethod from "./PayMethod";
import ProductsPay from "./ProductsPay";

const CheckOut = () => {
  return (
    <>
      <div className={style.CheckSection}>
        <PayMethod />
        <ProductsPay />
      </div>
    </>
  );
};

export default CheckOut;
