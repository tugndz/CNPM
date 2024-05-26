import React from 'react'

const ProductDescription = () => {
    return (
        <div className='max-padd-container mt-20'>
            <div className='flex gap-3 mb-4'>
                <button className='btn-dark rounded-sm !text-xs !py-[6px] w-36'>Miêu tả</button>
                <button className='btn-dark-outline rounded-sm !text-xs !py-[6px] w-36'>Hướng dẫn chăm sóc</button>
                <button className='btn-dark-outline rounded-sm !text-xs !py-[6px] w-36'>Hướng dẫn chọn size</button>
            </div>
            <div className='flex flex-col pb-16'>
                <p className='text-sm'>Dịch vụ hậu mãi chuyên nghiệp: Thế giới MERCHANZA cung cấp dịch vụ hậu mãi chuyên nghiệp, bao gồm bảo hành, sửa chữa và hỗ trợ kỹ thuật. Điều này giúp bạn yên tâm về việc sử dụng trong thời gian dài.</p>
                <p className='text-sm'>Dịch vụ hậu mãi chuyên nghiệp: Thế giới MERCHANZA cung cấp dịch vụ hậu mãi chuyên nghiệp, bao gồm bảo hành, sửa chữa và hỗ trợ kỹ thuật. Điều này giúp bạn yên tâm về việc sử dụng trong thời gian dài</p>
            </div>
        </div>
    )
}

export default ProductDescription