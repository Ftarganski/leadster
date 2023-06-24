import React from 'react'

type iBtn = {
    content: string
}

export const Button = ({ content }: iBtn) => {

    return (
        <button
            className="py-1 px-5 rounded-full text-sm md:text-md border border-gray-800 font-semibold hover:border-primary hover:text-primary">
            {content}
        </button>
    )
}