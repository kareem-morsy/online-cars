import React from "react";
import blogImg from "./assets/images/blogImg.png";
import style from "./styles/SingleBlog.module.scss";
import User from "./assets/images/user.svg";
import Facebook from "./assets/images/face.svg";
import Insta from "./assets/images/insta.svg";
import Snap from "./assets/images/snap.svg";
import Right from "./assets/images/rightArrow.svg";
import Left from "./assets/images/leftArrow.svg";
import Twitter from "./assets/images/tweter.svg";
import Calendar from "./assets/images/calendar.svg";
import Link from "next/link";
import Image from "next/future/image";
import BlogSidebar from "./BlogSidebar";
import { FormattedMessage } from "react-intl";

const SingleBlog = () => {
  return (
    <>
      <section className={style.singleBlog}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <BlogSidebar />
            </div>

            <div className="col-lg-8 col-12">
              <div className="blog-img">
                <Image src={blogImg} alt="blog-img" />
              </div>

              <div className="date-user">
                <div className="blog-date">
                  <p>August 3, 2022</p>
                  <Calendar />
                </div>
                <div className="writer">
                  <p>Admin</p>
                  <User />
                </div>
              </div>

              <h2>
                تصميم شعار قناة يوتيوب احترافي YouTube Logo | امتلك لوجو مميز
                لقناة اليوتيوب
              </h2>

              <p className="blog-content">
                النظارة بين التصميم العصري والوظائف المتقدمة لتحقيق تجربة رائعة
                للشمسية الخاصة بك
              </p>

              <h4>شعار فيديو يوتيوب</h4>

              <p className="blog-content">
                يُعد شعار فيديو يوتيوب هو العلامة المائية المميزة التي تظهر على
                مقاطع الفيديو التي يتم تحميلها من قبل قناة معينة.
              </p>

              <p className="blog-content">
                يُعد شعار فيديو يوتيوب هو العلامة المائية المميزة التي تظهر على
                مقاطع الفيديو التي يتم تحميلها من قبل قناة معينة.
              </p>

              <p className="blog-content">
                يُعد شعار فيديو يوتيوب هو العلامة المائية المميزة التي تظهر على
                مقاطع الفيديو التي يتم تحميلها من قبل قناة معينة.
              </p>

              <h4>شعار فيديو يوتيوب</h4>

              <p className="blog-content">
                يُعد شعار فيديو يوتيوب هو العلامة المائية المميزة التي تظهر على
                مقاطع الفيديو التي يتم تحميلها من قبل قناة معينة.
              </p>

              <p className="blog-content">
                يُعد شعار فيديو يوتيوب هو العلامة المائية المميزة التي تظهر على
                مقاطع الفيديو التي يتم تحميلها من قبل قناة معينة.
              </p>

              <ul>
                <li>أثناء مشاهدة الفيديو</li>
                <li>داخل صفحة القناة</li>
                <li>التعليقات على الفيديو</li>
                <li>الاشتراكات</li>
                <li>القنوات المميزة</li>
                <li>صفحة نتائج البحث</li>
              </ul>

              <p className="blog-content">
                يُعد شعار فيديو يوتيوب هو العلامة المائية المميزة التي تظهر على
                مقاطع الفيديو التي يتم تحميلها من قبل قناة معينة.
              </p>

              <p className="blog-content">
                يُعد شعار فيديو يوتيوب هو العلامة المائية المميزة التي تظهر على
                مقاطع الفيديو التي يتم تحميلها من قبل قناة معينة.
              </p>

              <section className="comments-section">

                <h5>ارسل لنا</h5>
                <p>إترك لنا تعليقك وسيف يتم التواصل معك</p>

                <form>
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label>الاسم الاول *</label>
                        <input type="text" className="form-control" placeholder="هنا يكتب الاسم الاول"/>
                      </div>

                    </div>

                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label>البريد الالكتروني *</label>
                        <input type="text" className="form-control" placeholder="هنا يكتب البريد الالكتروني"/>
                      </div>

                    </div>

                    <div className="col-md-12 col-12">
                      <div className="form-group">
                        <label>أضف ملاحظة</label>
                        <textarea className="form-control" placeholder="هنا يكتب ملاحظات على طلبك"></textarea>
                      </div>

                    </div>
                  </div>

                  <button type="submit">تأكيد</button>

                </form>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
