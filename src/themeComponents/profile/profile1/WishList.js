import React from "react";
import { Col } from "react-bootstrap";
import { filterSection } from "../../../../data";
import WishListCard from "./WishListCard";

const WishList = () => {
  return (
    <>
      <div className="wishlist-section">
        <div className="row">
          {filterSection?.map((product, index) => {
            return (
              <Col xl={4} lg={4} md={12} key={index}>
                <WishListCard product={product} />
              </Col>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WishList;
