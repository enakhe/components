import { Button } from '@material-tailwind/react'

const GlassInput = () => {

    return (
        <div className='animate-once animate-delay-400 animate__animated animate__fadeInUp'>
            <div className="mt-2 rounded-md shadow-sm flex lg:mr-10">
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="block lg:w-2/3 w-full rounded-md border-0 py-3 pl-5 pr-10 text-[#2A2346] placeholder:text-[#2A2346] sm:text-sm sm:leading-6 focus:ring-0 focus:outline-none glass mr-3"
                    placeholder="Enter your email"
                />
                <div className="flex items-center">
                    <Button className='capitalize font-family bg-[#2A2346] py-4'>Join Waitlist</Button>
                </div>
            </div>
        </div>
    )
}

export default GlassInput