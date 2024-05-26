import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6"

const Offer = () => {
    return (
        <section className='max-padd-container bg-banneroffer bg-center bg-cover w-full'>
            <div className='px-4 py-16 md:py-24 lg:py-44'>
                <h2 className='h2'>Giảm giá mùa hè 50%!</h2>
                <h3 className='medium-32 capitalize font-normal'>Lấy <span className='text-secondary'>Mục Yêu Thích Của Bạn</span> Trước Khi Chúng Biến Mất!</h3>
                <Link to={'/'} className='text-white bg-tertiary pl-6 rounded-full flexBetween gap-x-2 medium-16 w-44 mt-10 group'>
                    Tới của hàng
                    <FaArrowRightLong className='text-xl bg-secondary text-primary rounded-full h-12 w-12 p-4 group-hover:-rotate-45 transition-all duration-500 border-2 border-white' />
                </Link>
            </div>
        </section>
    )
}

export default Offer