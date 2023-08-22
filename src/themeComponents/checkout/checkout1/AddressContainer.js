import React from "react";
import Button from "react-bootstrap/Button";
import { FormattedMessage } from "react-intl";

const AddressContainer = () => {
  return (
    <>
      <div className="address-container">
        <div className="address-details active">
          <h5>العنوان (1)</h5>
          <p>السعودية / الرياض / شارع المحمدية عمارة 45 الطابق الثانى</p>
          <Button
            className="addrss-modal-bttn"
            onClick={() => setModalShow(true)}
          >
            <FormattedMessage id="edit" />
          </Button>
        </div>

        <div className="address-details">
          <h5>العنوان (2)</h5>
          <p>السعودية / الرياض / شارع المحمدية عمارة 45 الطابق الثانى</p>
          <Button
            className="addrss-modal-bttn"
            onClick={() => setModalShow(true)}
          >
            <FormattedMessage id="edit" />
          </Button>
        </div>

        <div className="address-details">
          <h5>العنوان (3)</h5>
          <p>السعودية / الرياض / شارع المحمدية عمارة 45 الطابق الثانى</p>
          <Button
            className="addrss-modal-bttn"
            onClick={() => setModalShow(true)}
          >
            <FormattedMessage id="edit" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddressContainer;
