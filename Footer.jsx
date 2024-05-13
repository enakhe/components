import whiteLogo from '../assets/header-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { navigation } from '../app/objects';
import { useDispatch, useSelector } from "react-redux";
import GlassInputNoButton from './GlassInputNoButton';
import { useNavigate } from "react-router-dom";
import { Button } from '@material-tailwind/react';
import Spiner from '../components/Spiner'
import SelectMenus from './SelectMenus';
import { toast } from "react-toastify";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect, useState } from 'react';
import { addWaitList, reset } from '../features/waitList/waitListSlice';

const Footer = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        serviceCategory: '',
    })

    const [errors, setErrors] = useState({});
    const { isError, isSuccess, message, isLoading } = useSelector((state) => state.waitList);
    const { fullName, email, phoneNumber, serviceCategory } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            toast.success("Successfully saved request! Thank you, we'll get in touch")
            navigate('/')
        }

        dispatch(reset())
    }, [isError, message, navigate, isSuccess, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const validate = () => {
        let temp = {};
        temp.email = (/\S+@\S+\.\S+/).test(email) ? false : true;
        temp.fullName = fullName !== "" ? false : true;
        temp.phoneNumber = phoneNumber !== "" ? false : true;
        temp.serviceCategory = serviceCategory !== "" ? false : true;
        setErrors(temp);
        return Object.values(temp).every(x => x === '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        validate()
        const requestData = {
            fullName,
            email,
            phoneNumber,
            serviceCategory
        }
        dispatch(addWaitList(requestData));
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            serviceCategory: '',
        })
    }

    return (

        <footer className="bg-[#2A2346] mt-72 lg:mt-0">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <a href="/" className="flex items-center">
                    <img
                        className="w-24"
                        src={whiteLogo}
                        alt="Feteflex logo" />
                </a>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-2 gap-10" id='contact'>
                    <ScrollAnimation duration={2} animateIn="fadeInLeft" animateOnce={true} initiallyVisible={true}>
                        <div className="mb-6 md:mb-0">
                            <div className='my-10'>
                                <h2 className="mb-6 text-sm font-semibold text-white">Join waitlist</h2>
                                <div className="glass p-5 items-center rounded-lg">
                                    <div className='w-full col-span-2'>
                                        <h2 className='text-white text-2xl'>Work with us</h2>
                                        <p className='text-sm text-white my-3'>Get early access and be the first to partner with us by creating a business account</p>
                                        <form onSubmit={onSubmit}>
                                            <div className='inputs'>
                                                <GlassInputNoButton placeholder="Full Name" value={fullName} onChange={onChange} error={errors.fullName} type={'text'} name='fullName' />
                                                <GlassInputNoButton placeholder='Email Address' value={email} onChange={onChange} error={errors.email} type={'email'} name='email' />
                                                <GlassInputNoButton placeholder='Phone Number' value={phoneNumber} onChange={onChange} error={errors.phoneNumber} type={'tel'} name='phoneNumber' />
                                                <SelectMenus placeholder='Service Category' value={serviceCategory} onChange={onChange} error={errors.serviceCategory} name='serviceCategory' />
                                            </div>
                                            <Button size='lg' type='submit' className='capitalize font-family bg-[#352866] my-3 w-full'>
                                                {
                                                    isLoading ? <Spiner /> : "Join Waitlist"
                                                }
                                            </Button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation duration={2} animateIn="fadeInRight" animateOnce={true} initiallyVisible={true}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1 my-10">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white">Features</h2>
                                <ul className="text-gray-500">
                                    {
                                        navigation[0].items.map((item, index) => (
                                            <li key={index} className="mb-4">
                                                <a href={item.path} className="text-gray-300 font-light hover:underline">{item.name}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white">Legal</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="text-gray-300 font-light hover:underline">Privacy Policy</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="text-gray-300 font-light hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="text-gray-300 font-light hover:underline flex space-x-2 sm:mt-0">
                                            <PhoneIcon className="h-5 w-5 text-gray-400" /> <span>(+234) 9056299369</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-300 font-light hover:underline flex space-x-2 sm:mt-0">
                                            <EnvelopeIcon className="h-5 w-5 text-gray-400" /> <span>contact@feteflex.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ScrollAnimation>


                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between" id='social-media'>
                    <span className="text-sm text-gray-400 sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Feteflex™</a>. All Rights Reserved
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer