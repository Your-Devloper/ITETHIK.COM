import React from 'react'
import { Button } from '../ui/button'


const HeaderContent = () => {
  return (
    <div className="h-screen pt-32 pl-14">
      <h1 className="text-6xl font-extrabold mb-6 leading-tight">
        Simplify Your IT Needs with <span className="text-[#4ac6f4]">ItEthik!</span>
      </h1>
      <p className="leading-relaxed">
        Your expert partner for computer, laptop/mac repairs, CCTV, intercoms, biometrics, and servers. We specialize in providing desktop and laptop repair services, along with maintenance and AMC services for CCTV, biometric, and intercom systems.
      </p>

      <div className="flex flex-col md:flex-row md:gap-4">
        <Button className="font-bold text-xl bg-[#31addb] px-9 py-7 rounded mt-9 hover:bg-[#2181A8] cursor-pointer">
          Book Now
        </Button>

        <a href="/services">
          <div className="flex font-bold text-xl px-9 py-4 cursor-pointer mt-9 hover:underline">
            View All Work
            <img src="/up-right-arrow.png" className="w-3 h-3 ml-3 mt-2.5 hover:rotate-45 transition" />
          </div>
        </a>
      </div>
    </div>
  )
}

export default HeaderContent