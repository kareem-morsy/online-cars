import style from "./styles/Blogs.module.scss";
import BlogCard from "./BlogCard";
import { blogPage } from "../../../../data";
import { Col } from "react-bootstrap";
import { blogSections } from "./../../../../data";
import Pagination from "react-bootstrap/Pagination";
import Arrows from "./assets/images/pagArrow.svg";
import PaginatedItems from "./PaginatedItems";

const BlogsComponent = () => {
  return (
    <section className={style.blogs}>
      <div className="container">
        <div className="row">
          {blogPage?.map((blog, index) => {
            return (
              <Col xl={3} lg={4} md={6} key={index}>
                <BlogCard blog={blog} />
              </Col>
            );
          })}
        </div>

        {/* <div className="pagination-section">
          <Pagination>
            <Pagination.Item>{1}<span></span></Pagination.Item>
            <Pagination.Item>{2}<span></span></Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            
            <Pagination.Next >
              <Arrows/>
            </Pagination.Next>
          </Pagination>
        </div> */}
{/* 
<PaginatedItems itemsPerPage={4} /> */}
      </div>
    </section>
  );
};

export default BlogsComponent;
