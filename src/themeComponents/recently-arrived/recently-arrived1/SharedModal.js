import React, { useState } from "react";
import Image from "next/future/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper";

import Modal from "react-bootstrap/Modal";
import styles from "./styles/RecentlyAdd.module.scss";
import { FormattedMessage } from "react-intl";
import ProductImages from "./ProductImages";
import ProductCardInfo from "./ProductCardInfo";

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
      show={props.show} onHide={props.handleClose}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="main-modal">
          <div className="container">
            <div className="row">
              <p>sssss</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SharedModal;
