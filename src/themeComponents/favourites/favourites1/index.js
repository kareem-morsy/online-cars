import style from "./styles/Salla.module.scss";
import SallaTable from "./SallaTable";

const SallaFav = () => {
  return (
    <>
      <section className={style.sallaSection}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-12">
              <SallaTable />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SallaFav;
