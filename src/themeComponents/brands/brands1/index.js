import React from "react";
import styles from "./styles/Brands.module.scss";
import Image from "next/future/image";
import brand1 from "./assets/images/brand1.png";
import brand2 from "./assets/images/brand2.png";
import brand3 from "./assets/images/brand3.png";
import brand4 from "./assets/images/brand4.png";
import brand5 from "./assets/images/brand5.png";
import brand6 from "./assets/images/brand6.png";
import LeftArrow from "./assets/images/left-arrow.svg";
import RightArrow from "./assets/images/right-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Brands = () => {
  return (
    <>
      <section className={styles.brandSection}>
        <div className="container">
          <h2 className="section-title text-center">اشهر الماركات</h2>

          <div className="brands-slider">
            <Swiper
              spaceBetween={10}
              grabCursor={true}
              loop ={true}
              centerInsufficientSlides
              breakpoints={{
                1199: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 4,
                },

                767: {
                  slidesPerView: 3,
                },
                550: {
                  slidesPerView: 2,
                },

                1: {
                  slidesPerView: 2,
                },
              }}
              navigation={{
                nextEl: ".k-next",
                prevEl: ".k-prev",
              }}
              slidesPerView={6}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="silde">
                  <Image src={brand1} alt="instagram" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="silde">
                  <Image src={brand2} alt="instagram" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="silde">
                  <Image src={brand3} alt="instagram" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="silde">
                  <Image src={brand4} alt="instagram" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="silde">
                  <Image src={brand5} alt="instagram" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="silde">
                  <Image src={brand6} alt="instagram" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="silde">
                  <Image src={brand3} alt="instagram" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="silde">
                  <Image src={brand4} alt="instagram" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="silde">
                  <Image src={brand2} alt="instagram" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="silde">
                  <Image src={brand1} alt="instagram" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="silde">
                  <Image src={brand4} alt="instagram" />
                </div>
              </SwiperSlide>
            </Swiper>
            <button className="k-next">
              <RightArrow />
            </button>
            <button className="k-prev">
              <LeftArrow />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
