import React from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import { LuDot } from 'react-icons/lu'

const RightSidebar = () => {
    return (
        <div className="w-[50px] h-screen bg-white flex flex-col justify-center items-center gap-4 border-l border-gray-200">
            <FaInstagram className="cursor-pointer hover:text-[#31addb] transition-colors" />
            <LuDot />
            <FaFacebookF className="cursor-pointer hover:text-[#31addb] transition-colors" />
            <LuDot />
            <FaXTwitter className="cursor-pointer hover:text-[#31addb] transition-colors" />
            <LuDot />
            <FaLinkedinIn className="cursor-pointer hover:text-[#31addb] transition-colors" />
        </div>
    )
}

export default RightSidebar