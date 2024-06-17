import { Fragment } from 'react'
import video from "../assets/mvp.mp4"

const Video = () => {
    return (
        <Fragment>
            <center>
                <div className='lg:mt-28 my-10 flex video justify-items-center'>
                    <video width="860" height="661" controls={false} playsInline autoPlay loop controlsList="nodownload">
                        <source src={video} type="video/mp4" />
                        <source src={video} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </center>
        </Fragment>
    )
}

export default Video