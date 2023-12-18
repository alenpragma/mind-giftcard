import React from 'react'
import btn from "../../_svg/Btn.svg"
import Image from "next/image"

const TopNav = () => {
    return (
        <div className='fixed p-[10px] w-full flex justify-end top-0 right-0'> 
            <div className="cursor-pointer "><Image src={btn} alt='meta btn' className=' md:w-[250px]'/></div>
        </div>
    )
}

export default TopNav
