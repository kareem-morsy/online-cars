import React from "react";
import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation , FreeMode } from "swiper";
import { swiperCategory } from "../../../../data";
import Right from "./assets/images/right-arrow.svg";
import Left from "./assets/images/left-arrow.svg";

const CategoriesMobSlider = () => {
  return (
    <>
      <div className="category-swiper">
        <Swiper
          dir="rtl"
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            990: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2,
            },

            1: {
              slidesPerView: 1,
            },
          }}
          navigation={{
            nextEl: ".product-next",
            prevEl: ".product-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {swiperCategory?.map((category, index) => {
            return (
              <SwiperSlide key={index}>
                <CategoryCard category={category} />
              </SwiperSlide>
            );
          })}

          <div className="swiper-bttns">
            <button className="product-next">
              <Right />
            </button>
            <button className="product-prev">
              <Left />
            </button>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default CategoriesMobSlider;
