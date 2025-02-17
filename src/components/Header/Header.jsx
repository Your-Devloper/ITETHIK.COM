import React from 'react'
import LeftSidebar from './LeftSidebar'
import HeaderContent from './HeaderContent'
import RightSidebar from './RightSidebar'
import CustomCarousel from './CustomCarousel'

const Header = () => {
  return (
    <div className="flex justify-between">
    
    {/* LEFT SIDE */} 
    <div className='flex w-1/2 justify-between'>
      <LeftSidebar />
      <HeaderContent />
    </div>

    {/* RIGHT SIDE */}
    <div className="flex w-1/2 h-screen justify-between items-center">
      <CustomCarousel />
      <RightSidebar />
    </div>

  </div>
  )
}

export default Header