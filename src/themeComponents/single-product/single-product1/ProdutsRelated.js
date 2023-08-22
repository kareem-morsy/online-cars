import LeftArrow from "./assets/images/left-arrow.svg";
import RightArrow from "./assets/images/right-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import RelatedCard from "./RelatedCard";
import { productsSection } from "../../../../data";

const ProdutsRelated = () => {
  return (
    <>
      <div className="related-products">
        <h2 className="section-title text-center">منتجات ذات صلة</h2>

        <div className="related-products-slider">
          <Swiper
            dir="rtl"
            pagination={{
              type: "fraction",
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            modules={[Navigation]}
            spaceBetween={10}
            grabCursor={true}
            centerInsufficientSlides
            breakpoints={{
              1199: {
                slidesPerView: 4,
              },

              990: {
                slidesPerView: 2,
              },
              550: {
                slidesPerView: 2,
              },

              1: {
                slidesPerView: 1,
              },
            }}
            slidesPerView={4}
          >
            {productsSection.map((product, index) => {
              return (
                <SwiperSlide>
                  <RelatedCard product={product} key={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="related-slider-btns">
            <button className="next-btn">
              <RightArrow />
            </button>
            <button className="prev-btn">
              <LeftArrow />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdutsRelated;
