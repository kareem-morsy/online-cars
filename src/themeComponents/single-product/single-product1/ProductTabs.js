import Image from "next/future/image";
import paragraph1 from "./assets/images/paragraph1.png";
import paragraph2 from "./assets/images/paragraph2.png";
import paragraph3 from "./assets/images/paragraph3.png";
import userImage from "./assets/images/user.png";
import Rate from "rc-rate";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

const ProductTabs = () => {
  const { formatMessage } = useIntl();
  const [rate, setRate] = useState(0);
  return (
    <>
      <div className="product-details-tabs">
        <Tabs defaultActiveKey="desc" id="fill-tab-example" className="mb-3">
          <Tab eventKey="desc" title={<FormattedMessage id="description" />}>
            <div className="container">
              <div className="product-paragraph">
                <h4>تصميم وتنفيذ أحترافي يتناسب مع اناقتك</h4>
                <p>
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                  الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                  العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،
                  عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة
                </p>

                <p>
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                  الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                  العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،
                  عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة
                </p>

                <div className="product-paragraph-img">
                  <Image src={paragraph1} alt="product-details" />
                </div>
              </div>

              <div className="product-paragraph">
                <h4>تصميم وتنفيذ أحترافي يتناسب مع اناقتك</h4>
                <p>
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                  الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                  العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،
                  عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة
                </p>

                <p>
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                  الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                  العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،
                  عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة
                </p>

                <div className="paragraph-img-group">
                  <div className="product-paragraph-multi-img">
                    <Image src={paragraph2} alt="product-details" />
                  </div>
                  <div className="product-paragraph-multi-img">
                    <Image src={paragraph3} alt="product-details" />
                  </div>
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="extra" title={<FormattedMessage id="extra" />}>
            <div className="container">
              <div className="extra-details">
                <div className="extra-destails-table">
                  <div className="extra-details-row">
                    <div className="f-cell">
                      <p>الوزن</p>
                    </div>

                    <div className="s-cell">
                      <p>20 جم</p>
                    </div>
                  </div>
                  <div className="extra-details-row">
                    <div className="f-cell">
                      <p>اللون</p>
                    </div>

                    <div className="s-cell">
                      <p>أزرق - أحمر _ اسود _اخضر</p>
                    </div>
                  </div>

                  <div className="extra-details-row">
                    <div className="f-cell">
                      <p>معلومة إضافية</p>
                    </div>

                    <div className="s-cell">
                      <p>تفاصيل المعلومة الاضافية</p>
                    </div>
                  </div>

                  <div className="extra-details-row">
                    <div className="f-cell">
                      <p>معلومة إضافية</p>
                    </div>

                    <div className="s-cell">
                      <p>تفاصيل المعلومة الاضافية</p>
                    </div>
                  </div>

                  <div className="extra-details-row">
                    <div className="f-cell">
                      <p>معلومة إضافية</p>
                    </div>

                    <div className="s-cell">
                      <p>تفاصيل المعلومة الاضافية</p>
                    </div>
                  </div>

                  <div className="extra-details-row">
                    <div className="f-cell">
                      <p>معلومة إضافية</p>
                    </div>

                    <div className="s-cell">
                      <p>تفاصيل المعلومة الاضافية</p>
                    </div>
                  </div>

                  <div className="extra-details-row">
                    <div className="f-cell">
                      <p>معلومة إضافية</p>
                    </div>

                    <div className="s-cell">
                      <p>تفاصيل المعلومة الاضافية</p>
                    </div>
                  </div>

                  <div className="extra-details-row">
                    <div className="f-cell">
                      <p>معلومة إضافية</p>
                    </div>

                    <div className="s-cell">
                      <p>تفاصيل المعلومة الاضافية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="comments" title={<FormattedMessage id="comments" />}>
            <div className="comments-section">
              <div className="actual-comment">
                <div className="comment-details">
                  <div className="comment-user">
                    <div className="user-img">
                      <Image src={userImage} alt="" />
                    </div>

                    <div className="user-details">
                      <h5>مروة عبد الرحمن</h5>
                      <p> September 2, 2019</p>
                    </div>
                  </div>

                  <div className="stars">
                    <Rate value={3.5} allowHalf="true" disabled />
                  </div>
                </div>

                <div className="comment-desc">
                  <p>
                    ماركة جميلة ومعروفة والمنتج اصلى والتوصيل ممتاز وصل فى
                    الميعاد مظبوط
                  </p>
                </div>
              </div>

              <div className="actual-comment">
                <div className="comment-details">
                  <div className="comment-user">
                    <div className="user-img">
                      <Image src={userImage} alt="" />
                    </div>

                    <div className="user-details">
                      <h5>مروة عبد الرحمن</h5>
                      <p> September 2, 2019</p>
                    </div>
                  </div>

                  <div className="stars">
                    <Rate value={3.5} allowHalf="true" disabled />
                  </div>
                </div>

                <div className="comment-desc">
                  <p>
                    ماركة جميلة ومعروفة والمنتج اصلى والتوصيل ممتاز وصل فى
                    الميعاد مظبوط
                  </p>
                </div>
              </div>

              <div className="add-comment">
                <div className="add-header">
                  <p>
                    <FormattedMessage id="addComment" />
                  </p>

                  <div className="stars">
                    <Rate
                      defaultValue={0}
                      onChange={(value) => setRate(value)}
                      value={rate}
                      allowHalf="true"
                    />
                  </div>
                </div>

                <div className="add-form">
                  <form>
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="text"
                            placeholder={formatMessage({
                              id: "userName",
                            })}
                          />
                        </Form.Group>
                      </div>

                      <div className="col-md-6 col-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="email"
                            placeholder={formatMessage({
                              id: "email",
                            })}
                          />
                        </Form.Group>
                      </div>

                      <div className="col-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder={formatMessage({
                              id: "addMessage",
                            })}
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div className="add-submit">
                      <Button type="submit">Submit</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default ProductTabs;
