import textR from "./assets/images/textRight.png";
import textL from "./assets/images/textLeft.png";
import test1 from "./assets/images/test1.png";
import test2 from "./assets/images/test2.png";
import test3 from "./assets/images/test3.png";
import Quotes from "./assets/images/Quotes.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/future/image";

const AboutReviews = () => {
  return (
    <>
      <div className="testminals">
        <div className="testminals-title">
          <div className="test-img">
            <Image src={textR} alt="Image" />
          </div>

          <h4>اراء العملاء</h4>

          <div className="test-img">
            <Image src={textL} alt="Image" />
          </div>
        </div>

        <div className="testminals-slider">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              1200: {
                slidesPerView: 2.8,
              },
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
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mainSwiper"
          >
            <SwiperSlide>
              <div className="testminals-card">
                <div className="test-card-img">
                  <Image src={test1} alt="user-image" />
                </div>

                <div className="test-card-content">
                  <div className="test-symbol">
                    <Quotes />
                  </div>
                  <p>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </p>

                  <h4>محمد ابراهيم</h4>
                  <h6>مصمم </h6>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testminals-card">
                <div className="test-card-img">
                  <Image src={test2} alt="user-image" />
                </div>

                <div className="test-card-content">
                  <div className="test-symbol">
                    <Quotes />
                  </div>
                  <p>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </p>

                  <h4>محمد ابراهيم</h4>
                  <p>مصمم </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testminals-card">
                <div className="test-card-img">
                  <Image src={test3} alt="user-image" />
                </div>

                <div className="test-card-content">
                  <div className="test-symbol">
                    <Quotes />
                  </div>
                  <p>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </p>

                  <h4>محمد ابراهيم</h4>
                  <p>مصمم </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testminals-card">
                <div className="test-card-img">
                  <Image src={test2} alt="user-image" />
                </div>

                <div className="test-card-content">
                  <div className="test-symbol">
                    <Quotes />
                  </div>
                  <p>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </p>

                  <h4>محمد ابراهيم</h4>
                  <p>مصمم </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testminals-card">
                <div className="test-card-img">
                  <Image src={test1} alt="user-image" />
                </div>

                <div className="test-card-content">
                  <div className="test-symbol">
                    <Quotes />
                  </div>
                  <p>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </p>

                  <h4>محمد ابراهيم</h4>
                  <p>مصمم </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AboutReviews;
