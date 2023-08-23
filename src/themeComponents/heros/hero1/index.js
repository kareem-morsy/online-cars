import Image from "next/future/image";
import Link from "next/link";
import cardImg1 from "./assets/images/cardImg1.png";
import cardImg2 from "./assets/images/cardImg2.png";
import swiper1 from "./assets/images/swiper1.png";
import style from "./styles/Style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const IntroSection = () => {
  return (
    <>
      <section className={style.introSection}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-12">
              <div className="intro-swiper">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="introSwiper"
                >
                  <SwiperSlide>
                    <div className="slide">
                      <div className="swiper-card">
                        <div className="swiper-card-img">
                          <Image src={swiper1} alt="Image" />
                          <Link href="/">
                            <a className="intro-overlay"></a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="slide">
                      <div className="swiper-card">
                        <div className="swiper-card-img">
                          <Image src={cardImg1} alt="Image" />
                          <Link href="/">
                            <a className="intro-overlay"></a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="slide">
                      <div className="swiper-card">
                        <div className="swiper-card-img">
                          <Image src={cardImg2} alt="Image" />
                          <Link href="/">
                            <a className="intro-overlay"></a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="col-xl-4 col-12">
              <div className="intro-cards">
                <div className="intro-card">
                  <div className="intro-card-img">
                    <Image src={cardImg1} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>

                <div className="intro-card">
                  <div className="intro-card-img">
                    <Image src={cardImg2} alt="Image" />
                    <Link href="/">
                      <a className="intro-overlay"></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
