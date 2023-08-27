import LeftArrow from "./assets/images/left-arrow.svg";
import RightArrow from "./assets/images/right-arrow.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import RelatedCard from "./RelatedCard";
import { specialOffer } from "../../../../data";
import Link from "next/link";

const ProdutsRelated = () => {
  return (
    <>
      <div className="related-products">
        <div className="section-title">
          <h2>منتجات مشابهة</h2>
          <Link href="/">
            <a className="title-button">مشاهدة الكل</a>
          </Link>
        </div>

        <div className="related-products-slider">
          

          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              990: {
                slidesPerView: 4,
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
              nextEl: ".blog-next",
              prevEl: ".blog-prev",
            }}
            modules={[Navigation, Pagination]}
            className="mainSwiper"
          >
            {specialOffer?.map((product, index) => {
              return (
                <SwiperSlide>
                  <RelatedCard product={product} key={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProdutsRelated;
