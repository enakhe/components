import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from 'react';
import { addWaitList, reset } from '../features/waitList/waitListSlice';
import { Button, Card, CardBody, CardFooter } from '@material-tailwind/react';
import GlassInputNoButton from './GlassInputNoButton';
import SelectMenus from './SelectMenus';
import Spiner from './Spiner';
import PropTypes from 'prop-types'

const WaitList = ({ onClick, glassEmail }) => {
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
        <Card className="mx-auto w-full max-w-[24rem] glass">
            <form onSubmit={onSubmit}>
                <CardBody className="flex flex-col gap-4">
                    <div className='inputs'>
                        <GlassInputNoButton placeholder="Full Name" value={fullName} onChange={onChange} error={errors.fullName} type={'text'} name='fullName' />
                        <GlassInputNoButton placeholder='Email Address' value={email || glassEmail} onChange={onChange} error={errors.email} type={'email'} name='email' />
                        <GlassInputNoButton placeholder='Phone Number' value={phoneNumber} onChange={onChange} error={errors.phoneNumber} type={'tel'} name='phoneNumber' />
                        <SelectMenus placeholder='Service Category' value={serviceCategory} onChange={onChange} error={errors.serviceCategory} name='serviceCategory' />
                    </div>
                </CardBody>
                <CardFooter className="pt-0 flex justify-between">
                    <Button variant="text" size='md' onClick={onClick} className='capitalize font-family text-red-500'>
                        Cancel
                    </Button>
                    <Button size='md' type='submit' className='capitalize font-family bg-[#352866]'>
                        {
                            isLoading ? <Spiner /> : "Join Waitlist"
                        }
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

WaitList.propTypes = {
    onClick: PropTypes.func.isRequired,
    glassEmail: PropTypes.string
}

export default WaitList