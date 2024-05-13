import { Avatar } from '@material-tailwind/react'
import avatar from '../assets/avatar.png'
import waitlist1 from '../assets/waitlist1.png'
import waitlist2 from '../assets/waitlist2.png'


const AvatarStack = () => {
    return (
        <div className="flex items-center -space-x-4">
            <Avatar
                variant="circular"
                alt="user 1"
                className="border-2 border-white hover:z-10 focus:z-10"
                src={waitlist1}
            />
            <Avatar
                variant="circular"
                alt="user 2"
                className="border-2 border-white hover:z-10 focus:z-10"
                src={waitlist2}
            />
            <Avatar
                variant="circular"
                alt="user 3"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY="
            />
            <Avatar
                variant="circular"
                alt="user 5"
                className="border-2 border-white hover:z-10 focus:z-10"
                src={avatar}
            />
        </div>
    )
}

export default AvatarStack