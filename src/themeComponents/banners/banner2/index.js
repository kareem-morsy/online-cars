import { FormattedMessage } from 'react-intl'
import style from './styles/CurrentOffer.module.scss'
import Link  from 'next/link'



const CurretOffer = () => {
  return (
    <>
        <section className={style.currentOffer}>
            <div className='container'>
                <div className='current-offer-content'>
                    <h2>صفقة اليوم</h2>
                    <p>نحن نقدم عرضًا مبهرا في كل مناسبة</p>
                    <div className='offer-timer'>
                        <div className='timer-item'>
                            <span className='time-value'>23</span>
                            <span className='time-text'><FormattedMessage id='day'/></span>
                        </div>

                        <div className='timer-item'>
                            <span className='time-value'>10</span>
                            <span className='time-text'><FormattedMessage id='hour'/></span>
                        </div>

                        <div className='timer-item'>
                            <span className='time-value'>5</span>
                            <span className='time-text'><FormattedMessage id='minute'/></span>
                        </div>

                        <div className='timer-item'>
                            <span className='time-value'>30</span>
                            <span className='time-text'><FormattedMessage id='second'/></span>
                        </div>
                    </div>

                    <Link href="/">
                        <a>اكتشف الآن</a>
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default CurretOffer