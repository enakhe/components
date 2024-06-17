import { Fragment } from 'react'
import { features } from '../app/objects'
import ScrollAnimation from 'react-animate-on-scroll'

const Features2Card = () => {
    return (
        <Fragment>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 padding-utils lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
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
        </Fragment>
    )
}

export default Features2Card;
