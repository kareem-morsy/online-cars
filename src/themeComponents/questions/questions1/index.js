import style from "./styles/Questions.module.scss";
import Accordion from "react-bootstrap/Accordion";

const Questions = () => {
  return (
    <>
      <section className={style.questionComponent}>
        <div className="container">
          <div className="questions-block">
            <div className="questions-block-title">
              <h2>الشراء و الدفع</h2>
            </div>

            <div className="questions-block-item">
              <Accordion defaultActiveKey="0" flush>

                <Accordion.Item eventKey="0">
                  <Accordion.Header>ما هو الدفع الالكتروني؟</Accordion.Header>
                  <Accordion.Body>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1">
                  <Accordion.Header>كيف تعمل المدفوعات الإلكترونية؟</Accordion.Header>
                  <Accordion.Body>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>ما هي أنواع المدفوعات الإلكترونية المختلفة؟</Accordion.Header>
                  <Accordion.Body>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>هل من الآمن استخدام المدفوعات الإلكترونية؟</Accordion.Header>
                  <Accordion.Body>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </Accordion.Body>
                </Accordion.Item>

        

              </Accordion>
            </div>
          </div>



          <div className="questions-block">
            <div className="questions-block-title">
              <h2>الطلبات و الارجاع</h2>
            </div>

            <div className="questions-block-item">
              <Accordion defaultActiveKey="0" flush>

                <Accordion.Item eventKey="0">
                  <Accordion.Header>ما هو الدفع الالكتروني؟</Accordion.Header>
                  <Accordion.Body>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1">
                  <Accordion.Header>كيف تعمل المدفوعات الإلكترونية؟</Accordion.Header>
                  <Accordion.Body>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>ما هي أنواع المدفوعات الإلكترونية المختلفة؟</Accordion.Header>
                  <Accordion.Body>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>هل من الآمن استخدام المدفوعات الإلكترونية؟</Accordion.Header>
                  <Accordion.Body>
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                    للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                    عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                    التصميم فيظهر بشكل لا يليق.
                  </Accordion.Body>
                </Accordion.Item>

        

              </Accordion>
            </div>
          </div>






        </div>
      </section>
    </>
  );
};

export default Questions;
