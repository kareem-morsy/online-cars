import { FormattedMessage } from 'react-intl'
import style from './styles/Style.module.scss'
import Link from 'next/link'
import Image from 'next/future/image'
import vedioBanner from './assets/images/vedioBanner.png'






const VedioBanner = () => {
    return (
        <>
            <section className={style.videoBanner}>
                <div className='container'>
                    <div className='videoBanner-img'>
                        <Image src={vedioBanner} alt="image" />
                        <Link href="/">
                            <a className='card-overlay'></a>
                        </Link>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default VedioBanner;