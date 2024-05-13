import { Fragment } from 'react'

import logoMulti from '../assets/logo-multi.png'

const AboutUs = () => {
    return (
        <Fragment>
            <div className='mx-auto max-w-3xl lg:pt-10 lg:max-w-7xl'>
                <div className="grid py-20 gap-5 sm:grid-cols-1 items-center p-6 lg:px-8 lg:grid-cols-2 md:grid-cols-2">
                    <div className=''>
                        <h3 className='text-[#8563A6] text-3xl font-bold'>About Us</h3>
                        <h5 className='text-[#2A2346 text-lg my-5 font-semibold'>Transforming Africa by revolutionizing the event industry
                            with technology and innovation</h5>
                        <p>
                            Our mission is to revolutionize the event industry by providing a unified platform that streamlines the booking process and enhances visibility for event professionals. With our user-friendly interface and advanced search options, we simplify event planning, offering real-time availability updates and secure transactions through our escrow payment system. By offering event professionals a dedicated space to market their services effectively,
                            Join us as we redefine the way events are planned, executed, and enjoyed.
                        </p>
                    </div>
                    <div className="grid animate-fade-up animate-once animate-delay-400 lg:justify-items-end justify-items-center">
                        <img src={logoMulti} className='w-96' alt="Landing Image" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutUs