import React from 'react'

const Button = ({ text, color, url }) => {

    let bg = 'bg-orange-500';
    let hbg = 'hover:bg-orange-600';

    if (color) {
        bg = color;
        hbg = 'hover:bg-blue-600';
    }

    return (
        <button>
            <a
                href={`${url}`}
                className={`rounded-md max-w-md mx-auto font-semibold px-3.5 tracking-wide py-2.5 text-sm text-white shadow-sm ${hbg} ${bg}`}
            >
                {text}
            </a>
        </button>
    )
}

export default Button