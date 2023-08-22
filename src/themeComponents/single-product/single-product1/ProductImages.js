import React, { useState } from "react";
import Image from "next/future/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper";

import glass1 from "./assets/images/glass1.png";
import glass2 from "./assets/images/glass2.png";
import glass3 from "./assets/images/glass3.png";
import glass4 from "./assets/images/glass4.png";
import glass5 from "./assets/images/glass5.png";



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
      </Swiper>
    </div>
  );
};

export default ProductImages;
