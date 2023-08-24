import Link from "next/link"
import style from './styles/BreadCramb.module.scss'
import LeftArrow from './assets/images/left-arrow.svg'
import { FormattedMessage } from 'react-intl';


const BreadCramb = ({pageName}) => {
  return (
    <>

        <div className={style.breadCramb}>
            <div className="container">
                <div className="breadCramb-content">
                    <h3>{pageName}</h3>
                    <ul className="bread-links">

                        <li>
                            <Link href='/'>
                                <a className="home-text"><FormattedMessage id="home"/></a>
                            </Link>
                        </li>

                        <li>
                            <span>
                                /
                            </span>
                        </li>
                        

                        <li className="current-link">{pageName}</li>

                       
                    </ul>
                </div>
            </div>
        </div>

    </>
  )
}

export default BreadCramb