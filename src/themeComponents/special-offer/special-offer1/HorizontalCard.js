import Link from 'next/link'
import Rate from 'rc-rate'
import Bag from './assets/images/bag.svg'
import Zoom from './assets/images/zoom.svg'
import Fav from './assets/images/fav.svg'
import Image from 'next/future/image'
import card1 from "./assets/images/card1.png";
import card2 from "./assets/images/card2.png";
import card3 from "./assets/images/card3.png";
import card4 from "./assets/images/card4.png";
import card5 from "./assets/images/card5.png";
import card6 from "./assets/images/card6.png";

const HorizontalCard = () => {
    return (
        <>
            <div className="offer-horizontal-card">
                <div className="horizontal-img">
                    <Image src={card1} alt="Image" />

                    <div className="card-pane">
                        <span>خصم 10% </span>
                    </div>
                    <Link href="/">
                        <a className="card-overlay"></a>
                    </Link>
                </div>

                <div className="horizontal-content">
                    <Link href="/">
                        <a className="horizontal-title">اسم المنتج يكتب هنا</a>
                    </Link>
                    <p className="horizontal-desc">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو </p>
                    <div className="stars">
                        <Rate value={3.5} allowHalf="true" disabled />
                    </div>

                    <div className="horizontal-price">
                        <span className="current-price">175 ر.س</span>
                        <span className="past-price">250 ر.س</span>
                    </div>
                </div>


            </div>
        </>
    )
}

export default HorizontalCard