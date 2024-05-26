import React from 'react'
import { Link } from 'react-router-dom'
import RelatedProducts from './RelatedProducts'

const Hero = () => {
    return (
        <section>
            <div className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[744px] w-full'>
                <div className='relative top-24 xs:top-32'>
                    <h4 className='uppercase medium-18 tracking-wider'>KHO BÁU THỜI THƯỢNG</h4>
                    <h2 className='h1 capitalize max-w-[40rem]'>Nâng Tầm Vẻ Đẹp Của bạn <span className='text-secondary'>Chỉ Một Cú Nhấp Chuột</span> Mua ngay!</h2>
                    <p className='my-5 max-w-[33rem]'>Dẫn đầu công nghệ, thỏa mãn đam mê, Gắn kết mọi người, kết nối mọi nhà, Mang công nghệ đến gần bạn hơn </p>
                    {/* buttons */}
                    <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl'>
                        <div className='text-center regular-14 leading-tight pl-5'>
                            <h5 className='uppercase font-bold'>30% Off</h5>
                            <p className='regular-14'>Tất cả mặt hàng</p>
                        </div>
                        <Link to={''} className='btn-dark rounded-xl flextCenter !py-5'>Vào Shop</Link>
                    </div>
                    {/* NewCollections  */}
                    <div className='mt-16'>
                        <RelatedProducts />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero