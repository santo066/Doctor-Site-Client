import contact_icon from '../../../assets/Frame (3).png'
import location_icon from '../../../assets/Frame (4).png'
import phone_icon from '../../../assets/Frame (5).png'

export default function Contact() {
    return (
        <div className='container'>
            <div className='md:flex-row flex flex-col md:gap-6 gap-4 items-center justify-center '>
                <div className='bg-[#07332F] md:p-10 p-6 flex gap-5 max-w-96 items-start justify-center rounded-3xl'>
                    <img src={contact_icon} alt="" className='' />
                    <div className='text-white'>
                        <h3 className='md:text-3xl text-2xl font-semibold mb-4'>Opening Hours</h3>
                        <span className='text-[16px]'>Open 9.00 am to 5.00pm Everyday</span>
                    </div>
                </div>
                <div className='bg-[#F7A582] md:p-10 p-6 flex gap-5 max-w-96 items-start justify-center rounded-3xl'>
                    <img src={location_icon} alt="" className='' />
                    <div className='text-white'>
                        <h3 className='md:text-3xl text-2xl font-semibold mb-4'>Our Locations</h3>
                        <span className='text-[16px]'>Dhanmondi 17, Dhaka -1200, Bangladesh</span>
                    </div>
                </div>
                <div className='bg-[#07332F] md:p-10 p-6 flex gap-5 max-w-96 items-start justify-center rounded-3xl'>
                    <img src={phone_icon} alt="" className='' />
                    <div className='text-white'>
                        <h3 className='md:text-3xl text-2xl font-semibold mb-4'>Contact Us</h3>
                        <span className='text-[16px]'>+88 01750 00 00 00</span>
                        <span className='text-[16px]'>+88 01750 00 00 00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}