import style from "./styles/AboutUs.module.scss";
import aboutImg1 from "./assets/images/about1.png";
import aboutImg2 from "./assets/images/about2.png";
import mission from "./assets/images/mission.png";
import Image from "next/future/image";
import AboutSlider from "./AboutSlider";
import { FormattedMessage } from "react-intl";

const AboutUs = () => {
  return (
    <>
      <section className={style.aboutpage}>
        <div className="container">
          <div className="about-title">
            <h2>حول متجرنا الإلكتروني</h2>
            <p>
              يوفر متجرنا العديد من القطع النادرة والجميلة من مصادر محلية
              وعالمية
            </p>
          </div>

          <div className="about-images">
            <div className="about-img">
              <Image src={aboutImg1} alt="about-image" />
            </div>

            <div className="about-img">
              <Image src={aboutImg2} alt="about-image" />
            </div>
          </div>

          <div className="story">
            <div className="row">
              <div className="col-lg-3">
                <h3><FormattedMessage id="story"/></h3>
              </div>

              <div className="col-lg-9">
                <h4>
                  تتزايد شعبية النظارات الشمسية كل عام، حيث تعتبر ليست فقط وسيلة
                  للحماية من الشمس ولكن أيضًا إكسسوار أنيق يضفي لمسة خاصة على
                  المظهر العام للشخص. ومع تزايد الطلب على النظارات الشمسية ،
                  توجد العديد من المتاجر التي تبيع هذا النوع من النظارات.
                </h4>

                <ul>
                  <li>
                    يتميز متجر النظارات الشمسية بتوفير مجموعة كبيرة ومتنوعة من
                    النظارات الشمسية بأشكال وأحجام وألوان مختلفة لتناسب جميع
                    الأذواق والأعمار. ويتمثل دور المتجر في توفير نظارات شمسية
                    عالية الجودة بأسعار معقولة تناسب جميع الميزانيات.
                  </li>

                  <li>
                    علاوة على ذلك، يقدم متجر النظارات الشمسية أيضًا خدمات متنوعة
                    مثل توفير النظارات الطبية الشمسية لأولئك الذين يحتاجون إلى
                    نظارات طبية، وتوفير العناية والصيانة للنظارات الشمسية
                    المباعة، وتوفير الإكسسوارات المختلفة للنظارات الشمسية مثل
                    الحافظات والأشرطة وغيرها.
                  </li>

                  <li>
                    يتميز المتجر الذي يعمل بشكل جيد بموظفين مدربين على مساعدة
                    العملاء في العثور على النظارات الشمسية المناسبة لهم وتقديم
                    المشورة فيما يتعلق بالأشكال والألوان والأحجام الأكثر ملاءمة
                    لتناسب مظهر الشخص.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="vision">
            <div className="vision-image">
              <Image src={mission} alt="mission" />
            </div>

            <div className="vision-content">
              <div className="vision-centent-element">
                <h4>مهمتنا</h4>
                <p>
                  ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                  للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                  عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                  التصميم فيظهر بشكل لا يليق.
                </p>
              </div>

              <div className="vision-centent-element">
                <h4>رؤيتنا</h4>
                <p>
                  ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر
                  للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                  عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه
                  التصميم فيظهر بشكل لا يليق.
                </p>
              </div>
            </div>
          </div>

          <AboutSlider/>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
