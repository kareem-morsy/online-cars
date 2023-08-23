import Link from "next/link";
import style from "./styles/Reviews.module.scss";
import ReviewsCard from "./ReviewsCard";
import { reviewSlider } from "../../../../data";
import { FormattedMessage } from "react-intl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Right from './assets/images/right-arrow.svg';
import Left from './assets/images/left-arrow.svg';



const ReviewsSection = () => {
  return (
    <>
      <section className={style.reviewsSection}>
        <div className="container">
          <div className="section-title">
            <h2>آراء العملاء</h2>
          </div>

          <Swiper
            spaceBetween={30}
            loop={false}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}

            breakpoints={{

              990: {
                slidesPerView: 3,
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
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            modules={[Navigation, Pagination]}
            className="mainSwiper"
          >
            {reviewSlider?.map((review, index) => {
              return (
                <SwiperSlide>

                  <ReviewsCard review={review} />

                </SwiperSlide>
              );
            })}

            {/* <SwiperSlide>
              <div className="slide">
                <div className="row">
                  {reviewSlider?.map((review, index) => {
                    return (
                      <div
                        className="col-lg-4 col-md-6 col-12"
                        key={index}
                      >
                        <ReviewsCard blog={review} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide">
                <div className="row">
                  {reviewSlider?.map((blog, index) => {
                    return (
                      <div
                        className="col-lg-4 col-md-6 col-12"
                        key={index}
                      >
                        <ReviewsCard blog={blog} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide> */}

          </Swiper>
          <div className="swiper-bttns">
            <button className="swiper-prev"><Right /></button>
            <button className="swiper-next"><Left /></button>
          </div>


        </div>
      </section>
    </>
  );
};

export default ReviewsSection;
