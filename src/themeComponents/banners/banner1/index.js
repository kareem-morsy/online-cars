import React from 'react'
import styles from './styles/ShoppingSec.module.scss'
import Image from "next/future/image";
import shopping from './assets/images/shopping.png'
import Link from 'next/link';
 
const ShoppingSection = () => {
  return (
    <>
        <section className={styles.shoppingSec}>
            <Link href="/">
                <a className='shopping-banner'>
                    <Image src={shopping} alt="shopping-banner" width={1920} height={700} />
                </a>
            </Link>
        </section>
    </>
  )
}

export default ShoppingSection