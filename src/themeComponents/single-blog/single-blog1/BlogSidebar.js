import discount2 from "./assets/images/discount2.png";
import newblog1 from "./assets/images/newblog1.png";
import newblog2 from "./assets/images/newblog2.png";
import newblog3 from "./assets/images/newblog3.png";
import Calendar from "./assets/images/calendar.svg";
import Link from "next/link";
import Image from "next/future/image";
import Search from "./assets/images/search.svg";
import { FormattedMessage, useIntl } from "react-intl";

const BlogSidebar = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className="blog-sidebar">
        <div className="blog-search">
          <h4>
            <FormattedMessage id="search" />
          </h4>
          <form>
            <div className="search-symbol">
              <input
                type="text"
                className="form-control"
                placeholder={formatMessage({
                  id: "searchPlacehlr",
                })}
              />
              <button>
                <Search />
              </button>
            </div>
          </form>
        </div>

        <div className="new-blogs">
          <h4>
            <FormattedMessage id="newArticles" />
          </h4>
          <Link href="/">
            <a className="new-blogs-card">
              <div className="new-blog-img">
                <Image src={newblog1} alt="blog-img" />
              </div>
              <div className="new-blog-details">
                <p>
                  <Calendar />
                  May 20, 2022
                </p>
                <h5>عنوان المقال يكتب هنا بشكل كامل</h5>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a className="new-blogs-card">
              <div className="new-blog-img">
                <Image src={newblog2} alt="blog-img" />
              </div>
              <div className="new-blog-details">
                <p>
                  <Calendar />
                  May 20, 2022
                </p>
                <h5>عنوان المقال يكتب هنا بشكل كامل</h5>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a className="new-blogs-card">
              <div className="new-blog-img">
                <Image src={newblog3} alt="blog-img" />
              </div>
              <div className="new-blog-details">
                <p>
                  <Calendar />
                  May 20, 2022
                </p>
                <h5>عنوان المقال يكتب هنا بشكل كامل</h5>
              </div>
            </a>
          </Link>
        </div>

        <div className="classification">
          <h4>التصنيفات</h4>
          <div className="classification-row">
            <h5>الانارة</h5>
            <span>25</span>
          </div>
          <div className="classification-row">
            <h5>اجزاء التعليق</h5>
            <span>61</span>
          </div>

          <div className="classification-row">
            <h5>جسم السيارة</h5>
            <span>14</span>
          </div>

          <div className="classification-row">
            <h5>الاجزاء الداخلية</h5>
            <span>9</span>
          </div>
        </div>

        <div className="blogs-keywords">
          <h4>
            <FormattedMessage id="keywords" />
          </h4>

          <div className="keywords-collection">
            <Link href="/blogs-categories">
              <a className="keyword-element">انارة</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">عفشة</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">هيكل سيارة</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">تلميع السيارة</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">شمعات الاحتراق</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">حامل اكواب</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">منظف تابلوه</a>
            </Link>

          </div>
        </div>

        <Link href="/">
          <a className="discount-img">
            <Image src={discount2} alt="discount" />
          </a>
        </Link>
      </div>
    </>
  );
};

export default BlogSidebar;
