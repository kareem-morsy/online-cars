import React, { useState } from "react";
import Image from "next/future/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import product1 from "./assets/images/product1.png";
import product2 from "./assets/images/product2.png";
import product3 from "./assets/images/product3.png";

const ProductImages = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product-slider">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="main-swiper"
      >
        <SwiperSlide>
          <div className="slide">
            <div className="slide-img">
              <Image src={product1} alt="product-img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="slide-img">
              <Image src={product2} alt="product-img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="slide-img">
              <Image src={product3} alt="product-img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="slide-img">
              <Image src={product1} alt="product-img" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="sub-swiper"
      >
        <SwiperSlide>
          <div className="sub-slide">
            <div className="sub-slide-img">
              <Image src={product1} alt="product-img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sub-slide">
            <div className="sub-slide-img">
              <Image src={product2} alt="product-img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sub-slide">
            <div className="sub-slide-img">
              <Image src={product3} alt="product-img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sub-slide">
            <div className="sub-slide-img">
              <Image src={product1} alt="product-img" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs, Autoplay]}
        className="mainSwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <div className="slide">
            <Image src={glass1} alt="glass" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <Image src={glass2} alt="glass" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <Image src={glass3} alt="glass" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <Image src={glass4} alt="glass" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <Image src={glass5} alt="glass" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <Image src={glass5} alt="glass" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <Image src={glass5} alt="glass" />
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        modules={[Navigation, Thumbs]}
        className="subSwiper"
      >
        <SwiperSlide>
          <div className="sub-silde">
            <Image src={glass1} alt="glass" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sub-silde">
            <Image src={glass2} alt="glass" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sub-silde">
            <Image src={glass3} alt="glass" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sub-silde">
            <Image src={glass4} alt="glass" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sub-silde">
            <Image src={glass5} alt="glass" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sub-silde">
            <Image src={glass5} alt="glass" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sub-silde">
            <Image src={glass5} alt="glass" />
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default ProductImages;
