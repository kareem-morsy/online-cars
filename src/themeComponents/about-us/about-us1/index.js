import style from "./styles/AboutUs.module.scss";
import introImg from "./assets/images/introImg.png";
import Image from "next/future/image";
import { FormattedMessage } from "react-intl";
import UL from "./assets/images/UL.svg";
import banner from "./assets/images/banner.png";
import about from "./assets/images/about.png";
import textR from "./assets/images/textRight.png";
import textL from "./assets/images/textLeft.png";
import test1 from "./assets/images/test1.png";
import test2 from "./assets/images/test2.png";
import test3 from "./assets/images/test3.png";
import Quotes from "./assets/images/Quotes.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const AboutUs = () => {
  return (
    <>
      <section className={style.aboutpage}>
        <div className="about-intro">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="intro-content">
                  <h4>نبذة عنا</h4>
                  <h6>طريقة سهلة لبدء حلول الأعمال الناجحة</h6>
                  <p className="intro-desc">
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </p>

                  <ul>
                    <li>
                      <span>
                        <UL />
                      </span>
                      <p>إطالة عمر سيارتك</p>
                    </li>

                    <li>
                      <span>
                        <UL />
                      </span>
                      <p>أخصائيو إصلاح الفرامل</p>
                    </li>

                    <li>
                      <span>
                        <UL />
                      </span>
                      <p>كاتمات الصوت وأنظمة العادم</p>
                    </li>

                    <li>
                      <span>
                        <UL />
                      </span>
                      <p>خدمات نظام الوقود</p>
                    </li>

                    <li>
                      <span>
                        <UL />
                      </span>
                      <p>التوجيه والتعليق</p>
                    </li>

                    <li>
                      <span>
                        <UL />
                      </span>
                      <p>تشخيصات الكمبيوتر الكاملة</p>
                    </li>

                    <li>
                      <span>
                        <UL />
                      </span>
                      <p>تحليل كامل للسلامة</p>
                    </li>

                    <li>
                      <span>
                        <UL />
                      </span>
                      <p>حافظ على برودة محرك سيارتك</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="intro-img">
                  <Image src={introImg} alt="Intro-Img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="intro-banner">
          <Image src={banner} alt="Image" />
        </div>

        <div className="vision">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-12">
                <div className="vision-img">
                  <Image src={about} alt="img" />
                </div>
              </div>

              <div className="col-md-5 col-12">
                <div className="vision-content">
                  <h4>نبذة عنا</h4>
                  <h6>مهمتنا ورؤيتنا</h6>
                  <p>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </p>

                  <p>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                  </p>

                  <div className="quote">
                    <p>
                      "يجب أن أقول ، أعتقد أن هذا هو المتجر الأكثر شهرة وحداثة
                      الذي زرته على الإطلاق"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              slidesPerView={2.8}
              spaceBetween={41}
              centeredSlides={true}
              loop={true}
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
                      ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
                      ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على
                      المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى
                      يتحدث عنه التصميم فيظهر بشكل لا يليق.
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
                      ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
                      ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على
                      المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى
                      يتحدث عنه التصميم فيظهر بشكل لا يليق.
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
                      ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
                      ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على
                      المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى
                      يتحدث عنه التصميم فيظهر بشكل لا يليق.
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
                      ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
                      ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على
                      المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى
                      يتحدث عنه التصميم فيظهر بشكل لا يليق.
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
                      ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
                      ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على
                      المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى
                      يتحدث عنه التصميم فيظهر بشكل لا يليق.
                    </p>

                    <h4>محمد ابراهيم</h4>
                    <p>مصمم </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
