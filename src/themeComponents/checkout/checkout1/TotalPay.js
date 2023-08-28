import React from 'react'

const TotalPay = () => {
  return (
    <>
    <div className='total-pay'>
        <div className='total-row'>
            <p className='total-title'>المجموع الفرعى</p>
            <h5>850 ر.س</h5>
        </div>

        <div className='line'></div>

        <div className='total-row'>
            <p className='total-title'>التوصيل</p>
            <h6>5 ر.س</h6>
        </div>

        <div className='line'></div>

        <div className='total-row'>
            <p className='total-title'>الاجمالى</p>
            <h5>855ر.س</h5>
        </div>
    </div>


    <div className='total-form'>
        <form>
            <label>كوبون الخصم</label>
            <div className='coupon'>
                <input type="text" placeholder='كوبون الخصم' />
                <button>تطبيق الخصم</button>
            </div>
        </form>

        

    </div>

    <div className='submit-order'>
        <button>استكمال الطلب</button>
    </div>

    </>
  )
}

export default TotalPay