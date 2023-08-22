import React, { useState } from "react";
import Image from "next/future/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper";
import glass1 from "./assets/images/glass1.png";
import glass2 from "./assets/images/glass2.png";
import glass3 from "./assets/images/glass3.png";
import glass4 from "./assets/images/glass4.png";
import glass5 from "./assets/images/glass5.png";
import Link from "next/link";
import Rate from "rc-rate";
import Like from "./assets/images/like.svg";
import payMmethods from "./assets/images/payMmethods.png";
import Facebook from "./assets/images/facebook.svg";
import Twitter from "./assets/images/twitter.svg";
import Instagram from "./assets/images/instagram.svg";
import Snap from "./assets/images/snap.svg";
import Modal from "react-bootstrap/Modal";
import styles from "./styles/styles.module.scss";
import { FormattedMessage } from "react-intl";

const SharedModal = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleCloseModal = () => {
    props?.onHide();
    setThumbsSwiper(null);
  };

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={styles.sharedModal}
      onHide={handleCloseModal}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
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
              </div>

              <div className="col-lg-6 col-12">
                <div className="product-info">
                  <h4>اسم النظارة يكتب هنا بشكل كامل</h4>

                  <div className="stars">
                    <Rate value={3.5} allowHalf="true" disabled />
                    <p>لا يوجد تقييم</p>
                  </div>

                  <h5>200 ريال</h5>

                  <p className="product-info-desc">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص ...
                  </p>

                  <div className="info-salla">
                    <div className="Salla-count">
                      <button>+</button>
                      <span>1</span>
                      <button>-</button>
                    </div>

                    <button className="add-cart">
                      <FormattedMessage id="addToCart" />
                    </button>

                    <button className="favourite">
                      <span>
                        <Like />
                      </span>
                      <FormattedMessage id="favourite" />
                    </button>
                  </div>

                  <div className="pay-methods">
                    <Image src={payMmethods} alt="pay-methods" />
                  </div>

                  <div className="info-social">
                    <h6>
                      <FormattedMessage id="share" /> :
                    </h6>
                    <div className="social">
                      <Link href="/">
                        <a>
                          <Facebook />
                        </a>
                      </Link>

                      <Link href="/">
                        <a>
                          <Twitter />
                        </a>
                      </Link>

                      <Link href="/">
                        <a>
                          <Instagram />
                        </a>
                      </Link>

                      <Link href="/">
                        <a>
                          <Snap />
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="SKU">
                    <h6>SKU : </h6>
                    <p>su8</p>
                  </div>

                  <div className="calssification">
                    <h6>
                      <FormattedMessage id="category" /> :
                    </h6>
                    <p>نظارات نسائية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
};

export default SharedModal;
