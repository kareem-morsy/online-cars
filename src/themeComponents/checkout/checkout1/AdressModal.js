import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import style from "./styles/ModalStyle.module.scss";

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
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="add-modal">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>الاسم كاملا</Form.Label>
                  <Form.Control type="text" placeholder="اكتب الاسم ثلاثي" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>الدولة</Form.Label>
                  <Form.Select size="lg">
                    <option>اختر الدولة</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>المدينة</Form.Label>
                      <Form.Select size="lg">
                        <option>اختر المدينة</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>المحافظة</Form.Label>
                      <Form.Select size="lg">
                        <option>اختر المحافظة</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>العنوان</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="اكتب العنوان كاملا"
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>الرقم البريدى</Form.Label>
                      <Form.Control type="text" placeholder="الرقم البريدى" />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>رقم الهاتف</Form.Label>
                      <Form.Control type="tel" placeholder="رقم الهاتف" />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="modal-submit">
                  <button type="submit">اضافة عنوان جديد</button>
                </div>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default AdressModal;
