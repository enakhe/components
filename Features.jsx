import { Fragment } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import rec1 from '../assets/Rectangle-1.png'
import rec2 from '../assets/Rectangle-2.png'
import rec3 from '../assets/Rectangle-3.png'

const Features = () => {
    return (
        <Fragment>
            <div className="bg-[#f1eef7]">
                <div className='mx-auto max-w-3xl lg:max-w-7xl py-10 px-6 lg:px-0'>
                    <h3 className='text-[#2A2346] text-3xl p-6 text-center font-bold'>One App That Gets It All Done</h3>

                    <div className="padding-utils">
                        <ScrollAnimation className='grid gap-5 sm:grid-cols-1 items-center lg:grid-cols-3' duration={1} animateIn="fadeInUp" animateOnce={true}>
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
    )
}

export default Features