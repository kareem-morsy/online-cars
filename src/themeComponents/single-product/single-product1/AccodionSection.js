import Image from "next/future/image";
import Accordion from "react-bootstrap/Accordion";
import details1 from "./assets/images/details1.png";
import details2 from "./assets/images/details2.png";
import userImage from "./assets/images/user.png";
import Rate from "rc-rate";

const AccodionSection = () => {
  return (
    <>
      <div className="product-accordion">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>التفاصيل</Accordion.Header>
            <Accordion.Body>
              <div className="product-details">
                <p>
                  خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل
                  إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل
                  الميلاد، مما يجعله أكثر من 2000 عام في القدم. قام البروفيسور
                  "ريتشارد ماك لينتوك"
                </p>

                <div className="prouct-images">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="product-img">
                        <Image src={details1} alt="product-image" />
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="product-img">
                        <Image src={details2} alt="product-image" />
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل
                  إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل
                  الميلاد، مما يجعله أكثر من 2000 عام في القدم. قام البروفيسور
                  "ريتشارد ماك لينتوك"
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>الشحن والمرتجعات</Accordion.Header>
            <Accordion.Body>
              <ul className="shipping-rules">
                <li>
                  يمكنك إرجاع العناصر الجديدة والتي لم يتم استعمالها خلال ٣٠
                  يومًا
                </li>
                <li>يمكن الإلغاء خلال 30 دقيقة من الشراء</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>التعليقات</Accordion.Header>
            <Accordion.Body>
              <div className="product-comments">
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

                <div className="more-comments">
                  <button>المزيد من التعليقات</button>
                </div>

                <div className="comment-form">
                  <p>قم بكتابة تعليق أو وصف عن تجربتك للـمنتج </p>
                  <form>
                    <div className="rating">
                      <h4>تقييمك</h4>
                      <Rate value={3.5} allowHalf="true" className="stars" />
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label>الاسم *</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label>البريد الالكتروني *</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-12 col-12">
                        <div className="form-group">
                          <label>الرسالة*</label>
                          <textarea className="form-control"></textarea>
                        </div>
                      </div>

                      <button className="comment-submit">إرسال</button>
                    </div>
                  </form>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default AccodionSection;
