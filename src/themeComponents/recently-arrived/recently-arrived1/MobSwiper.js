import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { SwiperSlidee } from "../../../../data";
import Right from './assets/images/right-arrow.svg'
import Left from './assets/images/left-arrow.svg'
import RecentlyCard from "./RecentlyCard";
const MobSwiper = () => {
  return (
    <>
      <div className="mob-swiper">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            990: {
              slidesPerView: 2,
            },
            480: {
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
          {SwiperSlidee?.map((product, index) => {
            return (
              <SwiperSlide>
                <RecentlyCard product={product} key={index} />
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

export default MobSwiper;
