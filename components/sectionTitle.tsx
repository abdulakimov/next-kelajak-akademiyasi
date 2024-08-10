import React from 'react'

interface SectionTitleProps {
    title: string
}

function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className='flex flex-row justify-center items-center gap-4'>
            <span className='w-[300px] max-sm:w-[100px] h-[3px] rounded-md bg-black'></span>
            <h1 className='font-extrabold text-5xl max-sm:text-3xl gradient-text'>{title}</h1>
            <span className='w-[300px] max-sm:w-[100px] h-[3px] rounded-md bg-black'></span>
        </div>
    )
}

export default SectionTitle