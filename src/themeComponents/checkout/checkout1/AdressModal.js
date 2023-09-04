import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import style from "./styles/ModalStyle.module.scss";
import { FormattedMessage } from "react-intl";

const AdressModal = (props) => {
  return (
    <>
      <div className="address-modal">
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className={style.locationModal}
          show={props.show} onHide={props.handleClose}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="add-modal">
              <form>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label><FormattedMessage id="firstName"/></label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label><FormattedMessage id="secondName"/></label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-12 col-12">
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="companyName"/>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label><FormattedMessage id="homeadress"/></label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label><FormattedMessage id="phone"/></label>
                      <input type="tel" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label><FormattedMessage id="government"/></label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label><FormattedMessage id="street"/></label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-12 col-12">
                    <div className="form-group">
                      <label><FormattedMessage id="addNotes"/></label>
                      <textarea className="form-control"></textarea>
                    </div>
                  </div>
                </div>

                <button type="submit"><FormattedMessage id="submitAddress"/></button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default AdressModal;
