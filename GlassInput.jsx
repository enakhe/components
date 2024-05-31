import { Button, Dialog } from '@material-tailwind/react'
import WaitList from './WaitList'
import { useState } from 'react';

const GlassInput = () => {
    const [glassEmail, setGlassEmail] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const onChange = (e) => {
        setGlassEmail(e.target.value);
    };

    return (
        <div className='animate-once animate-delay-400 animate__animated animate__fadeInUp'>
            <div className="mt-2 rounded-md flex lg:mr-10">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="block lg:w-2/3 w-full rounded-md border-0 py-3 pl-5 pr-10 text-[#2A2346] placeholder:text-[#2A2346] sm:text-sm sm:leading-6 focus:ring-0 focus:outline-none glass mr-3"
                    placeholder="Enter your email"
                    onChange={onChange}
                />
                <div className="flex items-center">
                    <Button className='capitalize font-family bg-[#2A2346] py-4 px-4' onClick={handleOpen}>Join Waitlist</Button>
                </div>
            </div>

            <Dialog
                size="xs"
                open={open}
                onClose={open}
                handler={handleOpen}
                className="bg-transparent shadow-none">
                <WaitList onClick={handleOpen} glassEmail={glassEmail} />
            </Dialog>
        </div>
    )
}

export default GlassInput