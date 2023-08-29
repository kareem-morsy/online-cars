import Image from "next/future/image";
import User from "./assets/images/user.svg";
import Calendar from "./assets/images/calendar.svg";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const BlogCard = ({ blog }) => {
  return (
    <>
      <div className="blogSec-card">
        <div className="blogSec-card-img">
          <Image src={blog?.image} alt="blog-img" />
          <Link href="/blogs/1">
            <a className="img-overlay"></a>
          </Link>
        </div>

        <div className="blog-card-content">
          <Link href="/blogs/1">
            <a className="blog-title">{blog?.title}</a>
          </Link>

          <div className="blog-card-details">
            <div className="blog-date">
              <p>August 3, 2022</p>
              <Calendar />
            </div>
          </div>

          <Link href="/blogs/1">
            <a className="read-more">
              <FormattedMessage id="readMore" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
