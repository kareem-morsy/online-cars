import Image from "next/future/image";
import Link from "next/link";
import current from "./assets/images/current.png";
import style from './styles/Style.module.scss'

const CurrentOffer = () => {
  return (
    <section className={style.CurrentOffer}>
      <div className="container">
        <div className="current-offer-img">
          <Image src={current} alt="Image" />
          <Link href="/">
            <a className="current-overlay"></a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurrentOffer;
