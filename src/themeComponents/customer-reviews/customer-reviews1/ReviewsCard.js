import Image from "next/future/image";
import { FormattedMessage } from "react-intl";

const ReviewsCard = ({ review }) => {

  return (
    <>
      <div className="review-card">
        <div className="review-info">
          <div className="user-img">
            <Image src={review?.image} alt="User-Img" />
          </div>
          <div className="user-info">
            <h4>{review?.userName}</h4>
            <p>{review?.job}</p>
          </div>

        </div>

        <div className="review-desc">
          <p>
            {review?.desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewsCard;
