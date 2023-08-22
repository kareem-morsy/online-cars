import React from "react";
import styles from "./styles/MainSlider.module.scss";
import Image from "next/future/image";
import slide1 from "./assets/images/slide1.png";
import slide2 from "./assets/images/slide2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";




const IntroSection = () => {
  return (
    <>
    <section className="introSection">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-12">

          </div>

          <div className="col-xl-8 col-12">
            <div className="intro-card">
              
            </div>


          </div>
        </div>
      </div>
    </section>

      
    </>
  );
};

export default IntroSection;
