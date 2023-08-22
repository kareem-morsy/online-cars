import discount1 from "./assets/images/discount1.png";
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
        <Link href="/">
          <a className="discount-img">
            <Image src={discount1} alt="discount" />
          </a>
        </Link>

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
                <h5>عنوان المقال يكتب هنا بشكل كامل</h5>
                <p>
                  <Calendar />
                  May 20, 2022
                </p>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a className="new-blogs-card">
              <div className="new-blog-img">
                <Image src={newblog2} alt="blog-img" />
              </div>
              <div className="new-blog-details">
                <h5>عنوان المقال يكتب هنا بشكل كامل</h5>
                <p>
                  <Calendar />
                  May 20, 2022
                </p>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a className="new-blogs-card">
              <div className="new-blog-img">
                <Image src={newblog3} alt="blog-img" />
              </div>
              <div className="new-blog-details">
                <h5>عنوان المقال يكتب هنا بشكل كامل</h5>
                <p>
                  <Calendar />
                  May 20, 2022
                </p>
              </div>
            </a>
          </Link>
        </div>

        <div className="blogs-keywords">
          <h4>
            <FormattedMessage id="keywords" />
          </h4>

          <div className="keyword-row">
            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة</a>
            </Link>
          </div>

          <div className="keyword-row">
            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة</a>
            </Link>
          </div>

          <div className="keyword-row">
            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة</a>
            </Link>
          </div>

          <div className="keyword-row">
            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة</a>
            </Link>
          </div>

          <div className="keyword-row">
            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
            </Link>
          </div>

          <div className="keyword-row">
            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
            </Link>

            <Link href="/blogs-categories">
              <a className="keyword-element">كلمة دلالية</a>
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
