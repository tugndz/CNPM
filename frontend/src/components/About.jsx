import React from 'react'
import { TbTruckReturn } from 'react-icons/tb'
import about from '../assets/about.png'

const About = () => {
    return (
        <section className='max-padd-container py-12 xl:py-32'>
            {/* container */}
            <div className='flex flex-col gap-16 xl:gap-8 xl:flex-row'>
                {/* left  */}
                <div className='flex-1'>
                    <h3 className='h3 capitalize'>Tiết Lộ Các Tính Năng Chính Của Sản Phẩm Của Chúng Tôi</h3>
                    <p className='py-5'>Dịch vụ hậu mãi chuyên nghiệp: Thế giới MERCHANZA cung cấp dịch vụ hậu mãi chuyên nghiệp, bao gồm bảo hành, sửa chữa và hỗ trợ kỹ thuật. Điều này giúp bạn yên tâm về việc sử dụng trong thời gian dài.</p>
                    <div className='flex flex-col items-start gap-y-4'>
                        <div className='flexCenter gap-x-4'>
                            <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
                                <TbTruckReturn className='text-white text-2cl' />
                            </div>
                            <div>
                                <h4 className='medium-18'>Quy trình trả hàng dễ dàng</h4>
                                <p>Thế giới MERCHANZA cung cấp dịch vụ hậu mãi chuyên nghiệp, bao gồm bảo hành, sửa chữa và hỗ trợ kỹ thuật. Điều này giúp bạn yên tâm về việc sử dụng trong thời gian dài</p>
                            </div>
                        </div>
                        <div className='flexCenter gap-x-4'>
                            <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
                                <TbTruckReturn className='text-white text-2cl' />
                            </div>
                            <div>
                                <h4 className='medium-18'>Tùy chọn thanh toán an toàn</h4>
                                <p>Thế giới MERCHANZA cung cấp dịch vụ hậu mãi chuyên nghiệp, bao gồm bảo hành, sửa chữa và hỗ trợ kỹ thuật. Điều này giúp bạn yên tâm về việc sử dụng trong thời gian dài</p>
                            </div>
                        </div>
                        <div className='flexCenter gap-x-4'>
                            <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
                                <TbTruckReturn className='text-white text-2cl' />
                            </div>
                            <div>
                                <h4 className='medium-18'>Hỗ trợ khách hàng trực tiếp</h4>
                                <p>Thế giới MERCHANZA cung cấp dịch vụ hậu mãi chuyên nghiệp, bao gồm bảo hành, sửa chữa và hỗ trợ kỹ thuật. Điều này giúp bạn yên tâm về việc sử dụng trong thời gian dài</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='flex-1 flexCenter'>
                    <div>
                        <img src={about} alt="" height={488} width={488} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About