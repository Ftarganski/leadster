import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

export const Dropdown = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex flex-col md:flex-row gap-2 items-center'>
            <span className='font-extrabold mr-1 text-sm'>Ordernar por</span>
            <button className='relative flex items-center gap-1 py-2 px-4 rounded-lg border border-gray-800 font-semibold text-sm md:text-md text-gray-600' onClick={() => setOpen(!open)}>
                Data de Publicação
                {
                    open ? <AiFillCaretUp className='text-lg' /> : <AiFillCaretDown className='text-lg' />
                }
                {
                    open ? <div className='absolute bottom-[-108px] left-0 rounded-xl w-full bg-black text-white z-50'>
                        <ul className='flex flex-col items-start p-3 pl-5 gap-2'>
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                        </ul>
                    </div> : null
                }
            </button>
        </div>
    )
}