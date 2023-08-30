import { FormattedMessage } from "react-intl";
import style from "./styles/Style.module.scss";
import Link from "next/link";
import Image from "next/future/image";
import advertise1 from "./assets/images/advertise1.png";
import advertise2 from "./assets/images/advertise2.png";
import advertise3 from "./assets/images/advertise3.png";
import advertise4 from "./assets/images/advertise4.png";
import advertise5 from "./assets/images/advertise5.png";
import advertise6 from "./assets/images/advertise6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Right from "./assets/images/right-arrow.svg";
import Left from "./assets/images/left-arrow.svg";

const Advertise = () => {
  return (
    <>
      <section className={style.advertise}>
        <div className="container">
          <div className="main-advertise">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="advertise-large-card">
                  <div className="advertise-large-img">
                    <Image src={advertise1} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-12">
                <div className="advertise-small-card">
                  <div className="advertise-small-img">
                    <Image src={advertise2} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-12">
                <div className="advertise-small-card">
                  <div className="advertise-small-img">
                    <Image src={advertise3} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-12">
                <div className="advertise-small-card">
                  <div className="advertise-small-img">
                    <Image src={advertise4} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-12">
                <div className="advertise-small-card">
                  <div className="advertise-small-img">
                    <Image src={advertise5} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="advertise-large-card">
                  <div className="advertise-large-img">
                    <Image src={advertise6} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="advertise-slider">
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                990: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },

                1: {
                  slidesPerView: 1,
                },
              }}
              pagination={true}
              navigation={{
                nextEl: ".offer-next",
                prevEl: ".offer-prev",
              }}
              modules={[Navigation]}
              className="mainSwiper"
            >
              <SwiperSlide >
                <div className="advertise-small-card">
                  <div className="advertise-small-img">
                    <Image src={advertise5} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide >
                <div className="advertise-small-card">
                  <div className="advertise-small-img">
                    <Image src={advertise5} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide >
                <div className="advertise-small-card">
                  <div className="advertise-small-img">
                    <Image src={advertise5} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide >
                <div className="advertise-small-card">
                  <div className="advertise-small-img">
                    <Image src={advertise5} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide >
                <div className="advertise-small-card">
                  <div className="advertise-small-img">
                    <Image src={advertise5} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="swiper-bttns">
              <button className="offer-prev">
                <Right />
              </button>
              <button className="offer-next">
                <Left />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advertise;
