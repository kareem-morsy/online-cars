import style from "./styles/Blogs.module.scss";
import BlogCard from "./BlogCard";
import { blogPage } from "../../../../data";
import { Col } from "react-bootstrap";
import { blogSections } from "./../../../../data";
import Pagination from "react-bootstrap/Pagination";

const BlogsComponent = () => {
  return (
    <section className={style.blogs}>
      <div className="container">
        <div className="row">
          {blogPage?.map((blog, index) => {
            return (
              <Col xl={3} lg={3} md={6} key={index}>
                <BlogCard blog={blog} />
              </Col>
            );
          })}
        </div>

        <div className="pagination-section">
          <Pagination>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default BlogsComponent;
