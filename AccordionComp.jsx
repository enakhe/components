import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const AccordionComp = ({ header, body }) => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)} className='font-family text-md text-[#2A2346]'>{header}</AccordionHeader>
            <AccordionBody className="text-md">
                {body.map((body, index) => (
                    <p key={index} className='my-3'>{body}</p>
                ))}
            </AccordionBody>
        </Accordion>
    )
}

AccordionComp.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.array.isRequired
}

export default AccordionComp