import Image from 'next/image'
import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'


export const CardVideo = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="flex flex-col max-w-[362px] bg-white shadow-2xl shadow-gray-300 rounded-3xl overflow-hidden cursor-pointer hover:text-blue-500"
            onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
        >
            <div className='relative'>
                <Image width={362} height={204} src="/thumbnail.png" alt='' />
                {
                    show ? <div className=''>
                        <div className="absolute flex items-center justify-center top-0 w-full h-full bg-blue-500 opacity-30"></div>
                        <FaPlay className='absolute top-[30%] left-[35%] text-8xl text-white opacity-100' />
                    </div> : null
                }
            </div>
            <div className='py-5 px-8'>
                <h4 className='font-extrabold text-lg leading-[22px]'>Como aumentar sua Gestão de Leads feat. Traktor</h4>
            </div>
        </div>
    )
}