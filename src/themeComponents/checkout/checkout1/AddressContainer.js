import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FormattedMessage } from "react-intl";
import Edit from "./assets/images/edit.svg";
import Hint from "./assets/images/hint.svg";

const AddressContainer = () => {
  //modal details
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="address-container">
        <div className="address-info">
          <h2>معلومات التوصيل</h2>

          <button onClick={handleShow}>اضافة عنوان جديد</button>
        </div>

        <div className="address-details">
          <div className="details-info">
            <h4>المحلة الكبري</h4>
            <p>شارع شكرى الكواتلى بجوار الصياد للحلويات</p>
          </div>

          <div className="detailsModal">
            <button onClick={handleShow}>
              <span>
                <Edit />
              </span>
              تغيير
            </button>
          </div>
        </div>

        <div className="userInfo">
          <h4>محمود عامر</h4>
          <span>20 127*******76</span>
        </div>

        <div className="hint">
          <span>
            <Hint />
          </span>
          <p>قم بتضمين نفس العنوان في الفاتورة</p>
        </div>
      </div>
    </>
  );
};

export default AddressContainer;
