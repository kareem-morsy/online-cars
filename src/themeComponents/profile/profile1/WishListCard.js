import Image from "next/future/image";
import glass1 from "./assets/images/glass1.png";
import Rate from "rc-rate";
import BagIcon from "./assets/images/bag.svg";
import LikeIcon from "./assets/images/like.svg";
import CompareIcon from "./assets/images/compare.svg";
import ZoomIcon from "./assets/images/zoom.svg";
import DeleteBtn from "./assets/images/delete.svg";
import Link from "next/link";

const WishListCard = () => {
  return (
    <>
      <div className="wishlist-card">
        <div className="wishlist-card-img">
          <Image src={glass1} alt="moon" />
          <div className="wishlist-card-pane">
            <span className="new-pane">جديد</span>
            <span className="discount-pane">50%</span>
          </div>
          <button className="delete-bttn">
            <DeleteBtn />
          </button>

          <Link href="/">
            <a className="overlay-link"></a>
          </Link>

          <div className="overlay-button">
            <button>
              <BagIcon fill="#2B0000" />
            </button>

            <button>
              <LikeIcon fill="#2B0000" />
            </button>

            <button>
              <CompareIcon fill="#2B0000" />
            </button>

            <button>
              <ZoomIcon fill="#2B0000" />
            </button>
          </div>
        </div>

        <div className="wishlist-card-content">
          <Link href="/">
            <a className="wishlist-card-title">اسم النظارة يكتب هنا</a>
          </Link>

          <div className="stars">
            <Rate value={3.5} allowHalf="true" disabled />
          </div>

          <div className="wishlist-card-price">
            <span className="current-price">175 ر.س</span>
            <span className="past-price">250 ر.س</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListCard;
