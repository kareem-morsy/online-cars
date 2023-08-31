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
              767 : {
                slidesPerView: 2,
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
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            modules={[Navigation, Pagination]}
            className="mainSwiper"
          >
            {reviewSlider?.map((review, index) => {
              return (
                <SwiperSlide key={index}>

                  <ReviewsCard review={review} />

                </SwiperSlide>
              );
            })}

           

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
