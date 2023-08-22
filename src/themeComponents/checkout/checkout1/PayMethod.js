import LeftArrow from "./assets/images/left-arrow.svg";
import Link from "next/link";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import AdressModal from "./AdressModal";
import RightArrow from "./assets/images/rightArrow.svg";
import AddressContainer from "./AddressContainer";
import PayMethodCard from "./payMethodCard";
import { FormattedMessage } from "react-intl";


const PayMethod = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="pay-steps">
        <div className="steps-header">
          <div className="steps-breadcramb">
            <ul className="bread-links">
              <li>
                <Link href="/">
                  <a><FormattedMessage id="home"/></a>
                </Link>
              </li>

              <li>
                <span>
                  <LeftArrow fill="#8E8E8E" />
                </span>
              </li>

              <li><FormattedMessage  id="prdoucts"/></li>
            </ul>
          </div>

          <Button
            className="addrss-modal-bttn"
            onClick={() => setModalShow(true)}
          >
            <FormattedMessage id="addAddress"/>
          </Button>
        </div>

        <AddressContainer />
        <PayMethodCard/>

        <div className="pay-bttn">
          <Link href="/cart">
            <a className="back-link">
              <RightArrow />
              <FormattedMessage id="backToCart"/>
            </a>
          </Link>
          <button><FormattedMessage id="payNow"/></button>
        </div>
      </div>

      <AdressModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default PayMethod;
