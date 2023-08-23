import React from "react";
import slider1 from "./assets/images/slider1.png";
import slider2 from "./assets/images/slider2.png";
import slider3 from "./assets/images/slider3.png";
import slider4 from "./assets/images/slider4.png";
import slider6 from "./assets/images/slider6.png";
import slider7 from "./assets/images/slider7.png";
import Image from "next/future/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const AboutSlider = () => {
  return (
    <>
      <div className="about-slider">
        <div className="about-slider-title">
          <h4>اكتشف ما هو رائع</h4>
          <h3>ماذا يقول العملاء</h3>
        </div>

        <div className="slider-row">
          <div className="pre-slider-img-right">
            <div className="pre-img1">
              <Image src={slider1} alt="slider-img" />
            </div>

            <div className="pre-img2">
              <Image src={slider2} alt="slider-img" />
            </div>

            <div className="pre-img3">
              <Image src={slider3} alt="slider-img" />
            </div>
          </div>

          <div className="slider">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slide">
                  <div className="slide-img">
                    <Image src={slider4} alt="slider-img" />
                  </div>
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق.
                  </p>

                  <h5>هبة السيد</h5>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide">
                  <div className="slide-img">
                    <Image src={slider1} alt="slider-img" />
                  </div>
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق.
                  </p>

                  <h5>هبة السيد</h5>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide">
                  <div className="slide-img">
                    <Image src={slider7} alt="slider-img" />
                  </div>
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق.
                  </p>

                  <h5>هبة السيد</h5>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="pre-slider-img-left">
            <div className="pre-img1">
              <Image src={slider6} alt="slider-img" />
            </div>

            <div className="pre-img2">
              <Image src={slider7} alt="slider-img" />
            </div>

            <div className="pre-img3">
              <Image src={slider4} alt="slider-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSlider;
