import { Fragment } from 'react'
import GlassInput from './GlassInput'
import AvatarStack from './AvatarStack'
// import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'
import { Button } from '@material-tailwind/react'
import { motion, useScroll } from "framer-motion"

import landingImage from './../assets/landing.png'
import curve from './../assets/curve.png'
import item3 from './../assets/item3.png'
import logoMulti from '../assets/logo-multi.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'

import video from "../assets/mvp.mp4"

import rec1 from '../assets/Rectangle-1.png'
import rec2 from '../assets/Rectangle-2.png'
import rec3 from '../assets/Rectangle-3.png'

import iphone1 from '../assets/iPhone 13.png'
import iphone2 from '../assets/iPhone 13-2.png'
import iphone3 from '../assets/iPhone 13-3.png'

import phone1 from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'
import phone3 from '../assets/phone3.png'
import phone4 from '../assets/phone4.png'
import phone5 from '../assets/phone5.png'
import phone6 from '../assets/phone6.png'
import phone7 from '../assets/phone7.png'


import { features } from '../app/objects'
import Footer from './Footer'
import ScrollAnimation from 'react-animate-on-scroll';

import 'animate.css';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

const Body = () => {
    const { scrollYProgress } = useScroll();

    return (
        <Fragment>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            <div className='bg-[#f1eef7]'>
                <div className="mx-auto lg:max-w-7xl lg:pt-10">
                    <div className="grid py-12 gap-5 sm:grid-cols-1 items-center lg:grid-cols-2 md:grid-cols-1 padding-utils">
                        <div className="grid lg:justify-items-center mt-6">
                            <div className='px-6 lg:px-0'>
                                <h1 className="lg:text-4xl mt-5 text-align text-[#2A2346] tracking-tight text-4xl font-semibold animate-once animate-delay-300 animate__animated animate__zoomIn heading-text">
                                    Transforming <span className='text-[#8663A6]'>event planing</span> with
                                    technology and innovation
                                </h1>
                                <img alt='curve' src={curve} className='w-48 absolute bottom-30 animate-once animate-delay-300 animate__animated animate__zoomIn' />
                                <p className="md:text-md text-lg leading-relaxed py-5 font-normal text-[#2A2346] animate-once animate-delay-400 animate__animated animate__zoomIn"><b>Discover, Book  and Get Booked</b> All in one platform, it only takes a few clicks to get started. Be the first to experience the event revolution by Joining our community!</p>
                                <div className='hidden lg:block'>
                                    <GlassInput />
                                </div>
                                <div className='lg:hidden'>
                                    <Button variant="gradient" color="white" className='font-family w-48 text-md capitalize bg-[#2A2346] text-[#F1EEF7]'>
                                        Join Waitlist
                                    </Button>
                                </div>
                                <div className='mt-5 animate-delay-400 animate__animated animate__zoomIn'>
                                    <p className='text-[#2A2346] text-lg leading-relaxed mb-2'>Our Waitlist</p>
                                    <AvatarStack />
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:justify-items-end justify-items-center animate-delay-400 p-1 animate__animated animate__pulse animate__slower animate__infinite" id='about'>
                            <img src={landingImage} className='lg:w-4/5 w-full' alt="Landing Image" />
                        </div>
                    </div>
                </div>
            </div>

            <Fragment>
                <div className="about">
                    <div className='mx-auto max-w-3xl md:px-6 lg:px-0 lg:max-w-7xl mb-20'>
                        <div className="grid gap-5 about sm:grid-cols-1 items-center p-6 lg:px-2 lg:grid-cols-3">
                            <div className='col-span-2'>
                                <ScrollAnimation duration={1} animateIn="fadeInLeft" animateOnce={true}>
                                    <h3 className='text-[#2A2346] text-3xl font-bold'>Our Mission</h3>
                                    <p className='text-lg text-[#2A2346] leading-relaxed mt-5 max-w-2xl'>
                                        At Feteflex, we’re committed to redefining event planning with creativity and innovative technology through a unified platform.</p>
                                    <p className='my-2 max-w-2xl text-lg leading-relaxed text-[#2A2346]'>Imagine a platform where you can easily find the perfect venue, caterer, entertainment, and more, all at your fingertips<span className='lg:hidden'>...</span>.</p>
                                    <p className='my-2 max-w-2xl text-lg leading-relaxed text-[#2A2346] hidden lg:block'>Organizing events has never been easy and that is why we aim to simplify that process, providing a dedicated space for effective service marketing.</p>
                                    <div className='inline-flex items-center lg:hidden'>
                                        <h5 className='my-5 capitalize font-family text-lg leading-relaxed text-[#8563A6]'>Read more </h5>
                                        <ChevronDoubleRightIcon className="h-5 w-5 ml-3 text-[#8563A6]" />
                                    </div>
                                </ScrollAnimation>

                            </div>
                            <div className="grid col-span-2 lg:col-span-1 animate-fade-up animate-once animate-delay-400 justify-items-center">
                                <ScrollAnimation duration={1} animateIn="fadeInRight" animateOnce={true}>
                                    <img src={logoMulti} className='w-96' alt="Landing Image" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className="bg-[#f1eef7]">
                    <div className='mx-auto max-w-3xl lg:max-w-7xl py-10'>
                        <h3 className='text-[#2A2346] text-3xl p-6 text-center font-bold'>One App That Gets It All Done</h3>

                        <div className="padding-utils">
                            <ScrollAnimation className='grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-2 lg:grid-cols-3' duration={1} animateIn="fadeInUp" animateOnce={true}>
                                <div className='bg-[#ffffff] w-full rounded-2xl'>
                                    <h3 className='text-2xl text-[#2A2346] font-bold p-6'>Where Party Is <br /> Made Flexible</h3>
                                    <img src={rec1} className='w-48 float-end' />
                                </div>

                                <div className='bg-[#ffffff] w-full rounded-2xl'>
                                    <h3 className='text-2xl text-[#2A2346] font-bold p-6'>Imagination <br /> Meets Creativity</h3>
                                    <img src={rec2} className='w-48 float-end' />
                                </div>

                                <div className='bg-[#ffffff] w-full rounded-2xl'>
                                    <h3 className='text-2xl text-[#2A2346] font-bold p-6'>To Set Memorable <br /> Magical Moment</h3>
                                    <img src={rec3} className='w-48 float-end' />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className="bg-[#F8F8F8]">
                    <h3 className='text-[#2A2346] text-3xl max-w-3xl lg:max-w-7xl pt-10 mx-auto font-bold px-6 padding-utils'>Are You Planning an Event or Offering Event Services</h3>
                    <div className='mx-auto max-w-3xl lg:max-w-7xl py-10'>
                        <div className='flex justify-center'>
                            <div className="padding-utils">
                                <ScrollAnimation duration={1} animateIn="fadeInUp" animateOnce={true}>

                                    <div className='grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-0 lg:grid-cols-2'>
                                        <div className='bg-[#ffffff] rounded-2xl'>
                                            <h3 className='text-3xl text-[#2A2346] font-bold pt-6 px-6'>Feteflex For Your Events</h3>
                                            <div className='grid gap-5 sm:grid-cols-1 items-center lg:grid-cols-2'>
                                                <p className='px-6 mt-2 text-[#2A2346] text-lg leading-relaxed'>Browse through a diverse range of options, by location, vendor type, budget to find exactly what they need.</p>
                                                <div className='justify-items-end mt-6 px-6'>
                                                    <img src={iphone1} className='w-96 float-end' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='bg-[#ffffff] rounded-2xl'>
                                            <h3 className='text-3xl text-[#2A2346] font-bold pt-6 px-6'>Feteflex For Service Providers</h3>
                                            <div className='grid gap-5 sm:grid-cols-1 items-center lg:grid-cols-2'>
                                                <p className='px-6 mt-2 text-[#2A2346] text-lg leading-relaxed'>Event service providers now have the chance to showcase their unique offerings, and attract more clients</p>
                                                <div className='justify-items-end mt-6 px-6'>
                                                    <img src={iphone2} className='w-96 float-end' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='bg-[#ffffff] w-full rounded-2xl col-start-1 col-end-6'>
                                        <div className='grid gap-5 sm:grid-cols-1 items-end lg:grid-cols-3'>
                                            <div className='lg:col-span-2 my-5 px-6'>
                                                <h3 className='text-2xl text-[#2A2346] font-bold'>From Intimate Gatherings to Grand Celebrations</h3>
                                                <h2 className='text-lg text-[#8563A6] font-semibold'>Make Every Bookings With Confidence</h2>
                                                <p className='w-full text-[#2A2346] max-w-lg my-4 text-lg leading-relaxed'>Our escrow payment system ensures that funds are held securely until services are successfully delivered, providing peace of mind and mitigating financial disputes for you and your client.</p>
                                                <Button variant="gradient" color="white" className='font-family text-md w-48 capitalize bg-[#2A2346] text-[#F1EEF7]'>
                                                    Join Waitlist
                                                </Button>
                                            </div>
                                            <div className='mx-6 grid justify-items-center'>
                                                <img src={iphone3} className='w-96 flex justify-items-center' />
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className="bg-gradient">
                    <h3 className='text-[#2A2346] text-3xl text-center max-w-3xl lg:max-w-7xl pt-10 mx-auto font-bold px-4 lg:px-0'>Tell Us What You Are Planning</h3>
                    <div className='flex justify-center'>
                        <p className='lg:max-w-xl text-center text-[#2A2346] text-md p-6 text-lg leading-relaxed'>Whether you&apos;re organizing a wedding, concert, birthday party, corporate event, or beach party, our platform has everything you need to ensure seamless experiences for you.</p>
                    </div>

                    <ScrollAnimation duration={1} animateIn="fadeInRight" animateOnce={true}>
                        <div className='lg:pl-20 pl-5 mt-10 no-scrollbar scroll-smooth overflow-x-auto overflow-visible flex phones'>
                            <img src={phone1} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />
                            <img src={phone2} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mb-20' />
                            <img src={phone3} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />
                            <img src={phone4} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mb-20' />
                            <img src={phone5} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />
                            <img src={phone6} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mb-20' />
                            <img src={phone7} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />
                        </div>
                    </ScrollAnimation>



                    <div className='mx-auto lg:max-w-7xl p-6 my-20'>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                            {features.map((feature) => (
                                <ScrollAnimation duration={1} animateIn="fadeInUp" animateOnce={true} key={feature.name}>
                                    <center>
                                        <div className="grid justify-items-center animate-fade-up flex justify-center animate-once animate-delay-400 animate-alternate text-white">
                                            <div className='img-fluid h-80 bg-[#ffffff] w-full object-cover rounded-2xl' alt="Ticketing">
                                                <div className='feature-overlay'>
                                                    <dt className="text-sm mt-5 font-semibold leading-7 text-white-900">
                                                        <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#170C49]">
                                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                                        </div>
                                                    </dt>
                                                    <dd className="mt-2 text-center text-lg p-5 leading-7 text-[#2A2346]">{feature.description}</dd>
                                                </div>
                                            </div>

                                        </div>
                                    </center>
                                </ScrollAnimation>
                            ))}
                        </dl>

                        <Fragment>
                            <center>
                                <div className='lg:mt-28 my-10 flex video justify-items-center'>
                                    <video width="860" height="661" controls playsInline autoPlay={true} loop controlsList="nodownload">
                                        <source src={video} type="video/mp4" />
                                        <source src={video} type="video/ogg" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </center>
                            
                        </Fragment>
                    </div>
                </div>


            </Fragment>

            <Fragment>
                <div className='bg-[#f1eef7]'>
                    <div className="mx-auto max-w-3xl p-6 lg:max-w-7xl">
                        <ScrollAnimation duration={1} animateIn="fadeInLeft" animateOnce={true}>
                            <div>
                                <h3 className="text-[#2A2346] text-3xl mt-5 text-align font-bold animate-once animate-delay-300 animate__animated animate__zoomIn">
                                    Got Any Question?</h3>
                                <p className="text-[#2A2346] text-lg py-5 text-dark animate-once animate-delay-400 animate__animated animate__zoomIn">Wandering what Feteflex got in store for you? what challenges its solving? or how it can improve your business to get more clients? the opportunities are endless </p>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className='lg:pl-20 pl-5 mt-10 no-scrollbar scroll-smooth overflow-x-auto overflow-visible flex'>

                    </div>
                </div>


            </Fragment>

            <Fragment>
                <Footer />
            </Fragment>
        </Fragment>
    )
}

export default Body