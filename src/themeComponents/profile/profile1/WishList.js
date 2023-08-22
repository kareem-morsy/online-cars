import React from 'react'
import WishListCard from './WishListCard'

const WishList = () => {
  return (
    <>
    <div className='wishlist-section'>
        <div className='row'>
            <div className='col-xl-4 col-md-6 col-12'>
                <WishListCard/>
            </div>

            <div className='col-xl-4 col-md-6 col-12'>
                <WishListCard/>
            </div>

            <div className='col-xl-4 col-md-6 col-12'>
                <WishListCard/>
            </div>

            <div className='col-xl-4 col-md-6 col-12'>
                <WishListCard/>
            </div>

            <div className='col-xl-4 col-md-6 col-12'>
                <WishListCard/>
            </div>

            <div className='col-xl-4 col-md-6 col-12'>
                <WishListCard/>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default WishList