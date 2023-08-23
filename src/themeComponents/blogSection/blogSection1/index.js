import style from "./styles/BlogSection.module.scss";
import BlogSecCard from "./BlogSecCard";
import { blogSections } from "../../../../data";
import { FormattedMessage } from "react-intl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Right from './assets/images/right-arrow.svg';
import Left from './assets/images/left-arrow.svg';



const BlogSection = () => {
  return (
    <>
      <section className={style.blogSec}>
        <div className="container">
          <div className="section-title">
            <h2>اخر الاخبار</h2>
          </div>

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


            {blogSections?.map((blog, index) => {
              return (
                <SwiperSlide>

                  <BlogSecCard blog={blog} />

                </SwiperSlide>
              );
            })}


          </Swiper>

          <div className="swiper-bttns">
            <button className="blog-prev"><Right /></button>
            <button className="blog-next"><Left /></button>
          </div>

        </div>
      </section>
    </>
  );
};

export default BlogSection;
