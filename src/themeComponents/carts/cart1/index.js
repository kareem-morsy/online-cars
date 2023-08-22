import style from "./styles/Salla.module.scss";
import SallaTable from "./SallaTable";
import SallaPay from "./sallaPay";

const Salla = () => {
  return (
    <>
      <section className={style.sallaSection}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-12">
              <SallaTable />
            </div>

            <div className="col-xl-4 col-12">
              <SallaPay />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Salla;
