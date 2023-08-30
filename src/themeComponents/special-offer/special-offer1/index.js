import Link from "next/link";
import styles from "./styles/Style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import OfferCard from "./OfferCard";
import Right from "./assets/images/right-arrow.svg";
import Left from "./assets/images/left-arrow.svg";
import { specialOffer, singleCard } from "./../../../../data";
import Image from "next/future/image";
import HorizontalCard from "./HorizontalCard";

const SpecialOffers = () => {
  const offerProuduct = singleCard;
  return (
    <>
      <section className={styles.specialOffer}>
        <div className="container">
          <div className="section-title">
            <h2>عروض خاصة</h2>
            <Link href="/">
              <a className="title-button">مشاهدة الكل</a>
            </Link>
          </div>

          <div className="Offers-section">
            <div className="row">
              <div className="col-md-6 col-12">
                <HorizontalCard />

                <div className="offer-column">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <OfferCard product={offerProuduct} />
                    </div>
                    <div className="col-md-6 col-12">
                      <OfferCard product={offerProuduct} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="special-offer-slider">
                  <div className="offer-timer">
                    <div className="timer-unit">
                      <span>10</span>
                      <p>يوم</p>
                      <span className="symbol">:</span>
                    </div>

                    <div className="timer-unit">
                      <span>15</span>
                      <p>ساعة</p>
                      <span className="symbol">:</span>
                    </div>

                    <div className="timer-unit">
                      <span>45</span>
                      <p>دقيقة</p>
                      <span className="symbol">:</span>
                    </div>

                    <div className="timer-unit">
                      <span>25</span>
                      <p>ثانية</p>
                    </div>
                  </div>
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
                    modules={[Navigation, Pagination]}
                    className="mainSwiper"
                  >
                    {specialOffer?.map((product, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <OfferCard product={product} />
                        </SwiperSlide>
                      );
                    })}
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

              <div className="col-md-6 col-12">
                <div className="special-offer-slider">
                  <div className="offer-timer">
                    <div className="timer-unit">
                      <span>10</span>
                      <p>يوم</p>
                      <span className="symbol">:</span>
                    </div>

                    <div className="timer-unit">
                      <span>15</span>
                      <p>ساعة</p>
                      <span className="symbol">:</span>
                    </div>

                    <div className="timer-unit">
                      <span>45</span>
                      <p>دقيقة</p>
                      <span className="symbol">:</span>
                    </div>

                    <div className="timer-unit">
                      <span>25</span>
                      <p>ثانية</p>
                    </div>
                  </div>
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
                    modules={[Navigation, Pagination]}
                    className="mainSwiper"
                  >
                    {specialOffer?.map((product, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <OfferCard product={product} />
                        </SwiperSlide>
                      );
                    })}
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

              <div className="col-md-6 col-12">
                <div className="offer-column">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <OfferCard product={offerProuduct} />
                    </div>
                    <div className="col-md-6 col-12">
                      <OfferCard product={offerProuduct} />
                    </div>
                  </div>
                </div>

                <HorizontalCard />
              </div>
            </div>
          </div>

          <div className="mob-slider">
            <div className="special-offer-slider">
              <div className="offer-timer">
                <div className="timer-unit">
                  <span>10</span>
                  <p>يوم</p>
                  <span className="symbol">:</span>
                </div>

                <div className="timer-unit">
                  <span>15</span>
                  <p>ساعة</p>
                  <span className="symbol">:</span>
                </div>

                <div className="timer-unit">
                  <span>45</span>
                  <p>دقيقة</p>
                  <span className="symbol">:</span>
                </div>

                <div className="timer-unit">
                  <span>25</span>
                  <p>ثانية</p>
                </div>
              </div>
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
                    slidesPerView: 2,
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
                modules={[Navigation, Pagination]}
                className="mainSwiper"
              >
                {specialOffer?.map((product, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <OfferCard product={product} />
                    </SwiperSlide>
                  );
                })}
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
        </div>
      </section>
    </>
  );
};

export default SpecialOffers;
